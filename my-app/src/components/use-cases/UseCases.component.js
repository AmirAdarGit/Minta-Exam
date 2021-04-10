import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuList, MenuItem } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useEffect } from "react";
import { clickOnUseCase } from "../../actions/clickOnUsCase.thunk";
import { init } from "../../actions/init.thunk";
import "./useCases.css";

function UseCases() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);

  const cases = useSelector((state) => state.useCases);
  const fatchGalleryByCampaignId = (useCase) => {
    dispatch(clickOnUseCase(useCase.campaignId));
  };

  const isSelected = (campaignId) => {
    return cases.selectedCampaignId == campaignId;
  };
  return (
    <div className="use-cases">
      <ThemeProvider theme={theme}>
        <div className="title">Mints</div>
        <MenuList>
          {cases.useCases.map((useCase, index) => (
            <div key={index}>
              <MenuItem
                className={`use-case-item ${
                  isSelected(useCase.campaignId) ? "green" : ""
                }`}
                onClick={() => {
                  fatchGalleryByCampaignId(useCase);
                }}
              >
                # {useCase.name}
              </MenuItem>
            </div>
          ))}
        </MenuList>
      </ThemeProvider>
    </div>
  );
}

const theme = createMuiTheme({
  overrides: {
    MuiList: {
      root: {
        width: "150px",
      },
    },
  },
});
export default UseCases;

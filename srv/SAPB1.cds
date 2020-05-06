using { SAPB1 } from './external/SAPB1';

service BusinessOneService {

  // Excluding entities with SQL keywords from mocks
  annotate SAPB1.AssetDepreciationGroups with @cds.persistence:{mock:false};
  annotate SAPB1.FormattedSearches with @cds.persistence:{mock:false};
  annotate SAPB1.FormPreferences with @cds.persistence:{mock:false};
  annotate SAPB1.Resources with @cds.persistence:{mock:false};
  annotate SAPB1.Users with @cds.persistence:{mock:false};
  annotate SAPB1.ResourceCapacities with @cds.persistence:{mock:false};
  annotate SAPB1.UserKeysMD with @cds.persistence:{mock:false};
  // Elements with the error "Dubious type without non-virtual elements"
  // reported in https://github.com/sapmentors/cap-community/issues/59
  annotate SAPB1.RclRecurringExecutionParams with @cds.persistence:{mock:false};
  annotate SAPB1.AlertManagementDocument with @cds.persistence:{mock:false};
  annotate SAPB1.MaterialRevaluationFIFO with @cds.persistence:{mock:false};
  annotate SAPB1.ApprovalTemplateDocument with @cds.persistence:{mock:false};

  entity AccountCategory as projection on SAPB1.AccountCategory;

}

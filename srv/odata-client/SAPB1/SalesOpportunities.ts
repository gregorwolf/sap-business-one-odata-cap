/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { SalesOpportunitiesLine } from './SalesOpportunitiesLine';
import { SalesOpportunitiesCompetitionItem } from './SalesOpportunitiesCompetitionItem';
import { SalesOpportunitiesPartner } from './SalesOpportunitiesPartner';
import { SalesOpportunitiesInterest } from './SalesOpportunitiesInterest';
import { SalesOpportunitiesReason } from './SalesOpportunitiesReason';
import type { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
import { BoSoOsStatus } from './BoSoOsStatus';
import { BoSoClosedInTypes } from './BoSoClosedInTypes';
import { OpportunityTypeEnum } from './OpportunityTypeEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import {
  SalesOpportunitySourcesSetup,
  SalesOpportunitySourcesSetupType
} from './SalesOpportunitySourcesSetup';
import {
  SalesOpportunityInterestsSetup,
  SalesOpportunityInterestsSetupType
} from './SalesOpportunityInterestsSetup';
import {
  SalesOpportunityReasonsSetup,
  SalesOpportunityReasonsSetupType
} from './SalesOpportunityReasonsSetup';
import { SalesStages, SalesStagesType } from './SalesStages';
import { Industries, IndustriesType } from './Industries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Projects, ProjectsType } from './Projects';
import { Users, UsersType } from './Users';
import { Territories, TerritoriesType } from './Territories';

/**
 * This class represents the entity "SalesOpportunities" of service "SAPB1".
 */
export class SalesOpportunities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOpportunitiesType<T>
{
  /**
   * Technical entity name for SalesOpportunities.
   */
  static _entityName = 'SalesOpportunities';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesOpportunities entity
   */
  static _keys = ['SequentialNo'];
  /**
   * Sequential No.
   */
  sequentialNo!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Person.
   * @nullable
   */
  salesPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Source.
   * @nullable
   */
  source?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Interest Field 1.
   * @nullable
   */
  interestField1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Interest Field 2.
   * @nullable
   */
  interestField2?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Interest Field 3.
   * @nullable
   */
  interestField3?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Interest Level.
   * @nullable
   */
  interestLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Predicted Closing Date.
   * @nullable
   */
  predictedClosingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Max Local Total.
   * @nullable
   */
  maxLocalTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max System Total.
   * @nullable
   */
  maxSystemTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Weighted Sum Lc.
   * @nullable
   */
  weightedSumLc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Weighted Sum Sc.
   * @nullable
   */
  weightedSumSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Gross Profit.
   * @nullable
   */
  grossProfit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Gross Profit Total Local.
   * @nullable
   */
  grossProfitTotalLocal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Gross Profit Total System.
   * @nullable
   */
  grossProfitTotalSystem?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: BoSoOsStatus | null;
  /**
   * Reason For Closing.
   * @nullable
   */
  reasonForClosing?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Total Amount Local.
   * @nullable
   */
  totalAmountLocal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Amoun System.
   * @nullable
   */
  totalAmounSystem?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Closing Gross Profit Local.
   * @nullable
   */
  closingGrossProfitLocal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Closing Gross Profit System.
   * @nullable
   */
  closingGrossProfitSystem?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Closing Percentage.
   * @nullable
   */
  closingPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Current Stage No.
   * @nullable
   */
  currentStageNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Current Stage Number.
   * @nullable
   */
  currentStageNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Opportunity Name.
   * @nullable
   */
  opportunityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry.
   * @nullable
   */
  industry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Linked Document Type.
   * @nullable
   */
  linkedDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Ownershipfield.
   * @nullable
   */
  dataOwnershipfield?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Status Remarks.
   * @nullable
   */
  statusRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Chanel Name.
   * @nullable
   */
  bpChanelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Checkbox.
   * @nullable
   */
  documentCheckbox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Document Number.
   * @nullable
   */
  linkedDocumentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Territory.
   * @nullable
   */
  territory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Bp Channel Contact.
   * @nullable
   */
  bpChannelContact?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bp Chanel Code.
   * @nullable
   */
  bpChanelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closing Type.
   * @nullable
   */
  closingType?: BoSoClosedInTypes | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Opportunity Type.
   * @nullable
   */
  opportunityType?: OpportunityTypeEnum | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Aktivitaet.
   * @nullable
   */
  uAktivitaet?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Anbieten.
   * @nullable
   */
  uAnbieten?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La Rohre Ft.
   * @nullable
   */
  uLaRohreFt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La Kanal Ft.
   * @nullable
   */
  uLaKanalFt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La Flachkanal.
   * @nullable
   */
  uLaFlachkanal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La 1.
   * @nullable
   */
  uLa1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La 2.
   * @nullable
   */
  uLa2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La 3.
   * @nullable
   */
  uLa3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La 4.
   * @nullable
   */
  uLa4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La 5.
   * @nullable
   */
  uLa5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70409.
   * @nullable
   */
  uLaS70409?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70022.
   * @nullable
   */
  uLaS70022?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70006.
   * @nullable
   */
  uLaS70006?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70108.
   * @nullable
   */
  uLaS70108?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 79862.
   * @nullable
   */
  uLaS79862?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70043.
   * @nullable
   */
  uLaS70043?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70101.
   * @nullable
   */
  uLaS70101?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70233.
   * @nullable
   */
  uLaS70233?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70195.
   * @nullable
   */
  uLaS70195?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70178.
   * @nullable
   */
  uLaS70178?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70137.
   * @nullable
   */
  uLaS70137?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70017.
   * @nullable
   */
  uLaS70017?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70511.
   * @nullable
   */
  uLaS70511?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70034.
   * @nullable
   */
  uLaS70034?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 79527.
   * @nullable
   */
  uLaS79527?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70378.
   * @nullable
   */
  uLaS70378?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 80206.
   * @nullable
   */
  uLaS80206?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U La S 70029.
   * @nullable
   */
  uLaS70029?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Objektreport.
   * @nullable
   */
  uObjektreport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Opportunities Lines.
   * @nullable
   */
  salesOpportunitiesLines?: SalesOpportunitiesLine<T>[] | null;
  /**
   * Sales Opportunities Competition.
   * @nullable
   */
  salesOpportunitiesCompetition?: SalesOpportunitiesCompetitionItem<T>[] | null;
  /**
   * Sales Opportunities Partners.
   * @nullable
   */
  salesOpportunitiesPartners?: SalesOpportunitiesPartner<T>[] | null;
  /**
   * Sales Opportunities Interests.
   * @nullable
   */
  salesOpportunitiesInterests?: SalesOpportunitiesInterest<T>[] | null;
  /**
   * Sales Opportunities Reasons.
   * @nullable
   */
  salesOpportunitiesReasons?: SalesOpportunitiesReason<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson2?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOpportunitySourcesSetup} entity.
   */
  salesOpportunitySourceSetup?: SalesOpportunitySourcesSetup<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOpportunityInterestsSetup} entity.
   */
  salesOpportunityInterestSetup?: SalesOpportunityInterestsSetup<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOpportunityReasonsSetup} entity.
   */
  salesOpportunityReasonSetup?: SalesOpportunityReasonsSetup<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesStages} entity.
   */
  salesStage?: SalesStages<T> | null;
  /**
   * One-to-one navigation property to the {@link Industries} entity.
   */
  industry2?: Industries<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link Territories} entity.
   */
  territory2?: Territories<T> | null;

  constructor(readonly _entityApi: SalesOpportunitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOpportunitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sequentialNo: DeserializedType<T, 'Edm.Int32'>;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  salesPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  contactPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  source?: DeserializedType<T, 'Edm.Int32'> | null;
  interestField1?: DeserializedType<T, 'Edm.Int32'> | null;
  interestField2?: DeserializedType<T, 'Edm.Int32'> | null;
  interestField3?: DeserializedType<T, 'Edm.Int32'> | null;
  interestLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  predictedClosingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  maxLocalTotal?: DeserializedType<T, 'Edm.Double'> | null;
  maxSystemTotal?: DeserializedType<T, 'Edm.Double'> | null;
  weightedSumLc?: DeserializedType<T, 'Edm.Double'> | null;
  weightedSumSc?: DeserializedType<T, 'Edm.Double'> | null;
  grossProfit?: DeserializedType<T, 'Edm.Double'> | null;
  grossProfitTotalLocal?: DeserializedType<T, 'Edm.Double'> | null;
  grossProfitTotalSystem?: DeserializedType<T, 'Edm.Double'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  status?: BoSoOsStatus | null;
  reasonForClosing?: DeserializedType<T, 'Edm.Int32'> | null;
  totalAmountLocal?: DeserializedType<T, 'Edm.Double'> | null;
  totalAmounSystem?: DeserializedType<T, 'Edm.Double'> | null;
  closingGrossProfitLocal?: DeserializedType<T, 'Edm.Double'> | null;
  closingGrossProfitSystem?: DeserializedType<T, 'Edm.Double'> | null;
  closingPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  currentStageNo?: DeserializedType<T, 'Edm.Int32'> | null;
  currentStageNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  opportunityName?: DeserializedType<T, 'Edm.String'> | null;
  industry?: DeserializedType<T, 'Edm.Int32'> | null;
  linkedDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  dataOwnershipfield?: DeserializedType<T, 'Edm.Int32'> | null;
  statusRemarks?: DeserializedType<T, 'Edm.String'> | null;
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  bpChanelName?: DeserializedType<T, 'Edm.String'> | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  documentCheckbox?: DeserializedType<T, 'Edm.String'> | null;
  linkedDocumentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  territory?: DeserializedType<T, 'Edm.Int32'> | null;
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  bpChannelContact?: DeserializedType<T, 'Edm.Int32'> | null;
  bpChanelCode?: DeserializedType<T, 'Edm.String'> | null;
  closingType?: BoSoClosedInTypes | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  opportunityType?: OpportunityTypeEnum | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uAktivitaet?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uAnbieten?: DeserializedType<T, 'Edm.String'> | null;
  uLaRohreFt?: DeserializedType<T, 'Edm.String'> | null;
  uLaKanalFt?: DeserializedType<T, 'Edm.String'> | null;
  uLaFlachkanal?: DeserializedType<T, 'Edm.String'> | null;
  uLa1?: DeserializedType<T, 'Edm.String'> | null;
  uLa2?: DeserializedType<T, 'Edm.String'> | null;
  uLa3?: DeserializedType<T, 'Edm.String'> | null;
  uLa4?: DeserializedType<T, 'Edm.String'> | null;
  uLa5?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70409?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70022?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70006?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70108?: DeserializedType<T, 'Edm.String'> | null;
  uLaS79862?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70043?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70101?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70233?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70195?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70178?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70137?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70017?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70511?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70034?: DeserializedType<T, 'Edm.String'> | null;
  uLaS79527?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70378?: DeserializedType<T, 'Edm.String'> | null;
  uLaS80206?: DeserializedType<T, 'Edm.String'> | null;
  uLaS70029?: DeserializedType<T, 'Edm.String'> | null;
  uObjektreport?: DeserializedType<T, 'Edm.String'> | null;
  salesOpportunitiesLines?: SalesOpportunitiesLine<T>[] | null;
  salesOpportunitiesCompetition?: SalesOpportunitiesCompetitionItem<T>[] | null;
  salesOpportunitiesPartners?: SalesOpportunitiesPartner<T>[] | null;
  salesOpportunitiesInterests?: SalesOpportunitiesInterest<T>[] | null;
  salesOpportunitiesReasons?: SalesOpportunitiesReason<T>[] | null;
  businessPartner?: BusinessPartnersType<T> | null;
  salesPerson2?: SalesPersonsType<T> | null;
  salesOpportunitySourceSetup?: SalesOpportunitySourcesSetupType<T> | null;
  salesOpportunityInterestSetup?: SalesOpportunityInterestsSetupType<T> | null;
  salesOpportunityReasonSetup?: SalesOpportunityReasonsSetupType<T> | null;
  salesStage?: SalesStagesType<T> | null;
  industry2?: IndustriesType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  project?: ProjectsType<T> | null;
  user?: UsersType<T> | null;
  territory2?: TerritoriesType<T> | null;
}

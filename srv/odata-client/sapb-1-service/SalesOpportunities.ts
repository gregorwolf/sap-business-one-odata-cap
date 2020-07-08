/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunitiesRequestBuilder } from './SalesOpportunitiesRequestBuilder';
import { Moment } from 'moment';
import { SalesOpportunitiesLine, SalesOpportunitiesLineField } from './SalesOpportunitiesLine';
import { SalesOpportunitiesCompetitionItem, SalesOpportunitiesCompetitionItemField } from './SalesOpportunitiesCompetitionItem';
import { SalesOpportunitiesPartner, SalesOpportunitiesPartnerField } from './SalesOpportunitiesPartner';
import { SalesOpportunitiesInterest, SalesOpportunitiesInterestField } from './SalesOpportunitiesInterest';
import { SalesOpportunitiesReason, SalesOpportunitiesReasonField } from './SalesOpportunitiesReason';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesOpportunities" of service "SAPB1".
 */
export class SalesOpportunities extends Entity implements SalesOpportunitiesType {
  /**
   * Technical entity name for SalesOpportunities.
   */
  static _entityName = 'SalesOpportunities';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesOpportunities.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Sequential No.
   * @nullable
   */
  sequentialNo?: number;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Sales Person.
   * @nullable
   */
  salesPerson?: number;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: number;
  /**
   * Source.
   * @nullable
   */
  source?: number;
  /**
   * Interest Field 1.
   * @nullable
   */
  interestField1?: number;
  /**
   * Interest Field 2.
   * @nullable
   */
  interestField2?: number;
  /**
   * Interest Field 3.
   * @nullable
   */
  interestField3?: number;
  /**
   * Interest Level.
   * @nullable
   */
  interestLevel?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Predicted Closing Date.
   * @nullable
   */
  predictedClosingDate?: Moment;
  /**
   * Max Local Total.
   * @nullable
   */
  maxLocalTotal?: number;
  /**
   * Max System Total.
   * @nullable
   */
  maxSystemTotal?: number;
  /**
   * Weighted Sum Lc.
   * @nullable
   */
  weightedSumLc?: number;
  /**
   * Weighted Sum Sc.
   * @nullable
   */
  weightedSumSc?: number;
  /**
   * Gross Profit.
   * @nullable
   */
  grossProfit?: number;
  /**
   * Gross Profit Total Local.
   * @nullable
   */
  grossProfitTotalLocal?: number;
  /**
   * Gross Profit Total System.
   * @nullable
   */
  grossProfitTotalSystem?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Reason For Closing.
   * @nullable
   */
  reasonForClosing?: number;
  /**
   * Total Amount Local.
   * @nullable
   */
  totalAmountLocal?: number;
  /**
   * Total Amoun System.
   * @nullable
   */
  totalAmounSystem?: number;
  /**
   * Closing Gross Profit Local.
   * @nullable
   */
  closingGrossProfitLocal?: number;
  /**
   * Closing Gross Profit System.
   * @nullable
   */
  closingGrossProfitSystem?: number;
  /**
   * Closing Percentage.
   * @nullable
   */
  closingPercentage?: number;
  /**
   * Current Stage No.
   * @nullable
   */
  currentStageNo?: number;
  /**
   * Current Stage Number.
   * @nullable
   */
  currentStageNumber?: number;
  /**
   * Opportunity Name.
   * @nullable
   */
  opportunityName?: string;
  /**
   * Industry.
   * @nullable
   */
  industry?: number;
  /**
   * Linked Document Type.
   * @nullable
   */
  linkedDocumentType?: string;
  /**
   * Data Ownershipfield.
   * @nullable
   */
  dataOwnershipfield?: number;
  /**
   * Status Remarks.
   * @nullable
   */
  statusRemarks?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Bp Chanel Name.
   * @nullable
   */
  bpChanelName?: string;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * Customer Name.
   * @nullable
   */
  customerName?: string;
  /**
   * Document Checkbox.
   * @nullable
   */
  documentCheckbox?: string;
  /**
   * Linked Document Number.
   * @nullable
   */
  linkedDocumentNumber?: number;
  /**
   * Territory.
   * @nullable
   */
  territory?: number;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: Moment;
  /**
   * Bp Channel Contact.
   * @nullable
   */
  bpChannelContact?: number;
  /**
   * Bp Chanel Code.
   * @nullable
   */
  bpChanelCode?: string;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: Moment;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: Time;
  /**
   * Sales Opportunities Lines.
   * @nullable
   */
  salesOpportunitiesLines?: SalesOpportunitiesLine[];
  /**
   * Sales Opportunities Competition.
   * @nullable
   */
  salesOpportunitiesCompetition?: SalesOpportunitiesCompetitionItem[];
  /**
   * Sales Opportunities Partners.
   * @nullable
   */
  salesOpportunitiesPartners?: SalesOpportunitiesPartner[];
  /**
   * Sales Opportunities Interests.
   * @nullable
   */
  salesOpportunitiesInterests?: SalesOpportunitiesInterest[];
  /**
   * Sales Opportunities Reasons.
   * @nullable
   */
  salesOpportunitiesReasons?: SalesOpportunitiesReason[];
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[SalesPersons]] entity.
   */
  salesPerson2!: SalesPersons;
  /**
   * One-to-one navigation property to the [[SalesOpportunitySourcesSetup]] entity.
   */
  salesOpportunitySourceSetup!: SalesOpportunitySourcesSetup;
  /**
   * One-to-one navigation property to the [[SalesOpportunityInterestsSetup]] entity.
   */
  salesOpportunityInterestSetup!: SalesOpportunityInterestsSetup;
  /**
   * One-to-one navigation property to the [[SalesOpportunityReasonsSetup]] entity.
   */
  salesOpportunityReasonSetup!: SalesOpportunityReasonsSetup;
  /**
   * One-to-one navigation property to the [[SalesStages]] entity.
   */
  salesStage!: SalesStages;
  /**
   * One-to-one navigation property to the [[Industries]] entity.
   */
  industry2!: Industries;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project!: Projects;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[Territories]] entity.
   */
  territory2!: Territories;

  /**
   * Returns an entity builder to construct instances `SalesOpportunities`.
   * @returns A builder that constructs instances of entity type `SalesOpportunities`.
   */
  static builder(): EntityBuilderType<SalesOpportunities, SalesOpportunitiesTypeForceMandatory> {
    return Entity.entityBuilder(SalesOpportunities);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesOpportunities` entity type.
   * @returns A `SalesOpportunities` request builder.
   */
  static requestBuilder(): SalesOpportunitiesRequestBuilder {
    return new SalesOpportunitiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunities`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesOpportunities`.
   */
  static customField(fieldName: string): CustomField<SalesOpportunities> {
    return Entity.customFieldSelector(fieldName, SalesOpportunities);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { SalesOpportunitySourcesSetup, SalesOpportunitySourcesSetupType } from './SalesOpportunitySourcesSetup';
import { SalesOpportunityInterestsSetup, SalesOpportunityInterestsSetupType } from './SalesOpportunityInterestsSetup';
import { SalesOpportunityReasonsSetup, SalesOpportunityReasonsSetupType } from './SalesOpportunityReasonsSetup';
import { SalesStages, SalesStagesType } from './SalesStages';
import { Industries, IndustriesType } from './Industries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Projects, ProjectsType } from './Projects';
import { Users, UsersType } from './Users';
import { Territories, TerritoriesType } from './Territories';

export interface SalesOpportunitiesType {
  sequentialNo?: number;
  cardCode?: string;
  salesPerson?: number;
  contactPerson?: number;
  source?: number;
  interestField1?: number;
  interestField2?: number;
  interestField3?: number;
  interestLevel?: number;
  startDate?: Moment;
  predictedClosingDate?: Moment;
  maxLocalTotal?: number;
  maxSystemTotal?: number;
  weightedSumLc?: number;
  weightedSumSc?: number;
  grossProfit?: number;
  grossProfitTotalLocal?: number;
  grossProfitTotalSystem?: number;
  remarks?: string;
  reasonForClosing?: number;
  totalAmountLocal?: number;
  totalAmounSystem?: number;
  closingGrossProfitLocal?: number;
  closingGrossProfitSystem?: number;
  closingPercentage?: number;
  currentStageNo?: number;
  currentStageNumber?: number;
  opportunityName?: string;
  industry?: number;
  linkedDocumentType?: string;
  dataOwnershipfield?: number;
  statusRemarks?: string;
  projectCode?: string;
  bpChanelName?: string;
  userSignature?: number;
  customerName?: string;
  documentCheckbox?: string;
  linkedDocumentNumber?: number;
  territory?: number;
  closingDate?: Moment;
  bpChannelContact?: number;
  bpChanelCode?: string;
  attachmentEntry?: number;
  updateDate?: Moment;
  updateTime?: Time;
  salesOpportunitiesLines?: SalesOpportunitiesLine[];
  salesOpportunitiesCompetition?: SalesOpportunitiesCompetitionItem[];
  salesOpportunitiesPartners?: SalesOpportunitiesPartner[];
  salesOpportunitiesInterests?: SalesOpportunitiesInterest[];
  salesOpportunitiesReasons?: SalesOpportunitiesReason[];
  businessPartner: BusinessPartnersType;
  salesPerson2: SalesPersonsType;
  salesOpportunitySourceSetup: SalesOpportunitySourcesSetupType;
  salesOpportunityInterestSetup: SalesOpportunityInterestsSetupType;
  salesOpportunityReasonSetup: SalesOpportunityReasonsSetupType;
  salesStage: SalesStagesType;
  industry2: IndustriesType;
  employeeInfo: EmployeesInfoType;
  project: ProjectsType;
  user: UsersType;
  territory2: TerritoriesType;
}

export interface SalesOpportunitiesTypeForceMandatory {
  sequentialNo: number;
  cardCode: string;
  salesPerson: number;
  contactPerson: number;
  source: number;
  interestField1: number;
  interestField2: number;
  interestField3: number;
  interestLevel: number;
  startDate: Moment;
  predictedClosingDate: Moment;
  maxLocalTotal: number;
  maxSystemTotal: number;
  weightedSumLc: number;
  weightedSumSc: number;
  grossProfit: number;
  grossProfitTotalLocal: number;
  grossProfitTotalSystem: number;
  remarks: string;
  reasonForClosing: number;
  totalAmountLocal: number;
  totalAmounSystem: number;
  closingGrossProfitLocal: number;
  closingGrossProfitSystem: number;
  closingPercentage: number;
  currentStageNo: number;
  currentStageNumber: number;
  opportunityName: string;
  industry: number;
  linkedDocumentType: string;
  dataOwnershipfield: number;
  statusRemarks: string;
  projectCode: string;
  bpChanelName: string;
  userSignature: number;
  customerName: string;
  documentCheckbox: string;
  linkedDocumentNumber: number;
  territory: number;
  closingDate: Moment;
  bpChannelContact: number;
  bpChanelCode: string;
  attachmentEntry: number;
  updateDate: Moment;
  updateTime: Time;
  salesOpportunitiesLines: SalesOpportunitiesLine[];
  salesOpportunitiesCompetition: SalesOpportunitiesCompetitionItem[];
  salesOpportunitiesPartners: SalesOpportunitiesPartner[];
  salesOpportunitiesInterests: SalesOpportunitiesInterest[];
  salesOpportunitiesReasons: SalesOpportunitiesReason[];
  businessPartner: BusinessPartnersType;
  salesPerson2: SalesPersonsType;
  salesOpportunitySourceSetup: SalesOpportunitySourcesSetupType;
  salesOpportunityInterestSetup: SalesOpportunityInterestsSetupType;
  salesOpportunityReasonSetup: SalesOpportunityReasonsSetupType;
  salesStage: SalesStagesType;
  industry2: IndustriesType;
  employeeInfo: EmployeesInfoType;
  project: ProjectsType;
  user: UsersType;
  territory2: TerritoriesType;
}

export namespace SalesOpportunities {
  /**
   * Static representation of the [[sequentialNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENTIAL_NO: NumberField<SalesOpportunities> = new NumberField('SequentialNo', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<SalesOpportunities> = new StringField('CardCode', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[salesPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: NumberField<SalesOpportunities> = new NumberField('SalesPerson', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: NumberField<SalesOpportunities> = new NumberField('ContactPerson', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: NumberField<SalesOpportunities> = new NumberField('Source', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[interestField1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_FIELD_1: NumberField<SalesOpportunities> = new NumberField('InterestField1', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[interestField2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_FIELD_2: NumberField<SalesOpportunities> = new NumberField('InterestField2', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[interestField3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_FIELD_3: NumberField<SalesOpportunities> = new NumberField('InterestField3', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[interestLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_LEVEL: NumberField<SalesOpportunities> = new NumberField('InterestLevel', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<SalesOpportunities> = new DateField('StartDate', SalesOpportunities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[predictedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDICTED_CLOSING_DATE: DateField<SalesOpportunities> = new DateField('PredictedClosingDate', SalesOpportunities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[maxLocalTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_LOCAL_TOTAL: NumberField<SalesOpportunities> = new NumberField('MaxLocalTotal', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[maxSystemTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_SYSTEM_TOTAL: NumberField<SalesOpportunities> = new NumberField('MaxSystemTotal', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[weightedSumLc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHTED_SUM_LC: NumberField<SalesOpportunities> = new NumberField('WeightedSumLC', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[weightedSumSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHTED_SUM_SC: NumberField<SalesOpportunities> = new NumberField('WeightedSumSC', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[grossProfit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROSS_PROFIT: NumberField<SalesOpportunities> = new NumberField('GrossProfit', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[grossProfitTotalLocal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROSS_PROFIT_TOTAL_LOCAL: NumberField<SalesOpportunities> = new NumberField('GrossProfitTotalLocal', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[grossProfitTotalSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROSS_PROFIT_TOTAL_SYSTEM: NumberField<SalesOpportunities> = new NumberField('GrossProfitTotalSystem', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<SalesOpportunities> = new StringField('Remarks', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[reasonForClosing]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_FOR_CLOSING: NumberField<SalesOpportunities> = new NumberField('ReasonForClosing', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[totalAmountLocal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_AMOUNT_LOCAL: NumberField<SalesOpportunities> = new NumberField('TotalAmountLocal', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[totalAmounSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_AMOUN_SYSTEM: NumberField<SalesOpportunities> = new NumberField('TotalAmounSystem', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[closingGrossProfitLocal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_GROSS_PROFIT_LOCAL: NumberField<SalesOpportunities> = new NumberField('ClosingGrossProfitLocal', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[closingGrossProfitSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_GROSS_PROFIT_SYSTEM: NumberField<SalesOpportunities> = new NumberField('ClosingGrossProfitSystem', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[closingPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_PERCENTAGE: NumberField<SalesOpportunities> = new NumberField('ClosingPercentage', SalesOpportunities, 'Edm.Double');
  /**
   * Static representation of the [[currentStageNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_STAGE_NO: NumberField<SalesOpportunities> = new NumberField('CurrentStageNo', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[currentStageNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_STAGE_NUMBER: NumberField<SalesOpportunities> = new NumberField('CurrentStageNumber', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[opportunityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPPORTUNITY_NAME: StringField<SalesOpportunities> = new StringField('OpportunityName', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY: NumberField<SalesOpportunities> = new NumberField('Industry', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[linkedDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_DOCUMENT_TYPE: StringField<SalesOpportunities> = new StringField('LinkedDocumentType', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[dataOwnershipfield]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_OWNERSHIPFIELD: NumberField<SalesOpportunities> = new NumberField('DataOwnershipfield', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[statusRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_REMARKS: StringField<SalesOpportunities> = new StringField('StatusRemarks', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_CODE: StringField<SalesOpportunities> = new StringField('ProjectCode', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[bpChanelName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANEL_NAME: StringField<SalesOpportunities> = new StringField('BPChanelName', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<SalesOpportunities> = new NumberField('UserSignature', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[customerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_NAME: StringField<SalesOpportunities> = new StringField('CustomerName', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[documentCheckbox]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_CHECKBOX: StringField<SalesOpportunities> = new StringField('DocumentCheckbox', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[linkedDocumentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_DOCUMENT_NUMBER: NumberField<SalesOpportunities> = new NumberField('LinkedDocumentNumber', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[territory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY: NumberField<SalesOpportunities> = new NumberField('Territory', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<SalesOpportunities> = new DateField('ClosingDate', SalesOpportunities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<SalesOpportunities> = new NumberField('BPChannelContact', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[bpChanelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANEL_CODE: StringField<SalesOpportunities> = new StringField('BPChanelCode', SalesOpportunities, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<SalesOpportunities> = new NumberField('AttachmentEntry', SalesOpportunities, 'Edm.Int32');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<SalesOpportunities> = new DateField('UpdateDate', SalesOpportunities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<SalesOpportunities> = new TimeField('UpdateTime', SalesOpportunities, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesOpportunitiesLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES_LINES: CollectionField<SalesOpportunities> = new CollectionField('SalesOpportunitiesLines', SalesOpportunities, new SalesOpportunitiesLineField('', SalesOpportunities));
  /**
   * Static representation of the [[salesOpportunitiesCompetition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES_COMPETITION: CollectionField<SalesOpportunities> = new CollectionField('SalesOpportunitiesCompetition', SalesOpportunities, new SalesOpportunitiesCompetitionItemField('', SalesOpportunities));
  /**
   * Static representation of the [[salesOpportunitiesPartners]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES_PARTNERS: CollectionField<SalesOpportunities> = new CollectionField('SalesOpportunitiesPartners', SalesOpportunities, new SalesOpportunitiesPartnerField('', SalesOpportunities));
  /**
   * Static representation of the [[salesOpportunitiesInterests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES_INTERESTS: CollectionField<SalesOpportunities> = new CollectionField('SalesOpportunitiesInterests', SalesOpportunities, new SalesOpportunitiesInterestField('', SalesOpportunities));
  /**
   * Static representation of the [[salesOpportunitiesReasons]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES_REASONS: CollectionField<SalesOpportunities> = new CollectionField('SalesOpportunitiesReasons', SalesOpportunities, new SalesOpportunitiesReasonField('', SalesOpportunities));
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<SalesOpportunities, BusinessPartners> = new OneToOneLink('BusinessPartner', SalesOpportunities, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_2: OneToOneLink<SalesOpportunities, SalesPersons> = new OneToOneLink('SalesPerson2', SalesOpportunities, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[salesOpportunitySourceSetup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITY_SOURCE_SETUP: OneToOneLink<SalesOpportunities, SalesOpportunitySourcesSetup> = new OneToOneLink('SalesOpportunitySourceSetup', SalesOpportunities, SalesOpportunitySourcesSetup);
  /**
   * Static representation of the one-to-one navigation property [[salesOpportunityInterestSetup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITY_INTEREST_SETUP: OneToOneLink<SalesOpportunities, SalesOpportunityInterestsSetup> = new OneToOneLink('SalesOpportunityInterestSetup', SalesOpportunities, SalesOpportunityInterestsSetup);
  /**
   * Static representation of the one-to-one navigation property [[salesOpportunityReasonSetup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITY_REASON_SETUP: OneToOneLink<SalesOpportunities, SalesOpportunityReasonsSetup> = new OneToOneLink('SalesOpportunityReasonSetup', SalesOpportunities, SalesOpportunityReasonsSetup);
  /**
   * Static representation of the one-to-one navigation property [[salesStage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_STAGE: OneToOneLink<SalesOpportunities, SalesStages> = new OneToOneLink('SalesStage', SalesOpportunities, SalesStages);
  /**
   * Static representation of the one-to-one navigation property [[industry2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_2: OneToOneLink<SalesOpportunities, Industries> = new OneToOneLink('Industry2', SalesOpportunities, Industries);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<SalesOpportunities, EmployeesInfo> = new OneToOneLink('EmployeeInfo', SalesOpportunities, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<SalesOpportunities, Projects> = new OneToOneLink('Project', SalesOpportunities, Projects);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<SalesOpportunities, Users> = new OneToOneLink('User', SalesOpportunities, Users);
  /**
   * Static representation of the one-to-one navigation property [[territory2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY_2: OneToOneLink<SalesOpportunities, Territories> = new OneToOneLink('Territory2', SalesOpportunities, Territories);
  /**
   * All fields of the SalesOpportunities entity.
   */
  export const _allFields: Array<NumberField<SalesOpportunities> | StringField<SalesOpportunities> | DateField<SalesOpportunities> | TimeField<SalesOpportunities> | CollectionField<SalesOpportunities> | OneToOneLink<SalesOpportunities, BusinessPartners> | OneToOneLink<SalesOpportunities, SalesPersons> | OneToOneLink<SalesOpportunities, SalesOpportunitySourcesSetup> | OneToOneLink<SalesOpportunities, SalesOpportunityInterestsSetup> | OneToOneLink<SalesOpportunities, SalesOpportunityReasonsSetup> | OneToOneLink<SalesOpportunities, SalesStages> | OneToOneLink<SalesOpportunities, Industries> | OneToOneLink<SalesOpportunities, EmployeesInfo> | OneToOneLink<SalesOpportunities, Projects> | OneToOneLink<SalesOpportunities, Users> | OneToOneLink<SalesOpportunities, Territories>> = [
    SalesOpportunities.SEQUENTIAL_NO,
    SalesOpportunities.CARD_CODE,
    SalesOpportunities.SALES_PERSON,
    SalesOpportunities.CONTACT_PERSON,
    SalesOpportunities.SOURCE,
    SalesOpportunities.INTEREST_FIELD_1,
    SalesOpportunities.INTEREST_FIELD_2,
    SalesOpportunities.INTEREST_FIELD_3,
    SalesOpportunities.INTEREST_LEVEL,
    SalesOpportunities.START_DATE,
    SalesOpportunities.PREDICTED_CLOSING_DATE,
    SalesOpportunities.MAX_LOCAL_TOTAL,
    SalesOpportunities.MAX_SYSTEM_TOTAL,
    SalesOpportunities.WEIGHTED_SUM_LC,
    SalesOpportunities.WEIGHTED_SUM_SC,
    SalesOpportunities.GROSS_PROFIT,
    SalesOpportunities.GROSS_PROFIT_TOTAL_LOCAL,
    SalesOpportunities.GROSS_PROFIT_TOTAL_SYSTEM,
    SalesOpportunities.REMARKS,
    SalesOpportunities.REASON_FOR_CLOSING,
    SalesOpportunities.TOTAL_AMOUNT_LOCAL,
    SalesOpportunities.TOTAL_AMOUN_SYSTEM,
    SalesOpportunities.CLOSING_GROSS_PROFIT_LOCAL,
    SalesOpportunities.CLOSING_GROSS_PROFIT_SYSTEM,
    SalesOpportunities.CLOSING_PERCENTAGE,
    SalesOpportunities.CURRENT_STAGE_NO,
    SalesOpportunities.CURRENT_STAGE_NUMBER,
    SalesOpportunities.OPPORTUNITY_NAME,
    SalesOpportunities.INDUSTRY,
    SalesOpportunities.LINKED_DOCUMENT_TYPE,
    SalesOpportunities.DATA_OWNERSHIPFIELD,
    SalesOpportunities.STATUS_REMARKS,
    SalesOpportunities.PROJECT_CODE,
    SalesOpportunities.BP_CHANEL_NAME,
    SalesOpportunities.USER_SIGNATURE,
    SalesOpportunities.CUSTOMER_NAME,
    SalesOpportunities.DOCUMENT_CHECKBOX,
    SalesOpportunities.LINKED_DOCUMENT_NUMBER,
    SalesOpportunities.TERRITORY,
    SalesOpportunities.CLOSING_DATE,
    SalesOpportunities.BP_CHANNEL_CONTACT,
    SalesOpportunities.BP_CHANEL_CODE,
    SalesOpportunities.ATTACHMENT_ENTRY,
    SalesOpportunities.UPDATE_DATE,
    SalesOpportunities.UPDATE_TIME,
    SalesOpportunities.SALES_OPPORTUNITIES_LINES,
    SalesOpportunities.SALES_OPPORTUNITIES_COMPETITION,
    SalesOpportunities.SALES_OPPORTUNITIES_PARTNERS,
    SalesOpportunities.SALES_OPPORTUNITIES_INTERESTS,
    SalesOpportunities.SALES_OPPORTUNITIES_REASONS,
    SalesOpportunities.BUSINESS_PARTNER,
    SalesOpportunities.SALES_PERSON_2,
    SalesOpportunities.SALES_OPPORTUNITY_SOURCE_SETUP,
    SalesOpportunities.SALES_OPPORTUNITY_INTEREST_SETUP,
    SalesOpportunities.SALES_OPPORTUNITY_REASON_SETUP,
    SalesOpportunities.SALES_STAGE,
    SalesOpportunities.INDUSTRY_2,
    SalesOpportunities.EMPLOYEE_INFO,
    SalesOpportunities.PROJECT,
    SalesOpportunities.USER,
    SalesOpportunities.TERRITORY_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesOpportunities> = new AllFields('*', SalesOpportunities);
  /**
   * All key fields of the SalesOpportunities entity.
   */
  export const _keyFields: Array<Field<SalesOpportunities>> = [SalesOpportunities.SEQUENTIAL_NO];
  /**
   * Mapping of all key field names to the respective static field property SalesOpportunities.
   */
  export const _keys: { [keys: string]: Field<SalesOpportunities> } = SalesOpportunities._keyFields.reduce((acc: { [keys: string]: Field<SalesOpportunities> }, field: Field<SalesOpportunities>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

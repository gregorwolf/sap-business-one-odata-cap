import { SalesOpportunitiesRequestBuilder } from './SalesOpportunitiesRequestBuilder';
import { Moment } from 'moment';
import { SalesOpportunitiesLine } from './SalesOpportunitiesLine';
import { SalesOpportunitiesCompetitionItem } from './SalesOpportunitiesCompetitionItem';
import { SalesOpportunitiesPartner } from './SalesOpportunitiesPartner';
import { SalesOpportunitiesInterest } from './SalesOpportunitiesInterest';
import { SalesOpportunitiesReason } from './SalesOpportunitiesReason';
import { BoSoOsStatus } from './BoSoOsStatus';
import { BoSoClosedInTypes } from './BoSoClosedInTypes';
import { OpportunityTypeEnum } from './OpportunityTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesOpportunities" of service "SAPB1".
 */
export declare class SalesOpportunities extends EntityV4 implements SalesOpportunitiesType {
    /**
     * Technical entity name for SalesOpportunities.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Status.
     * @nullable
     */
    status?: BoSoOsStatus;
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
     * Closing Type.
     * @nullable
     */
    closingType?: BoSoClosedInTypes;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Opportunity Type.
     * @nullable
     */
    opportunityType?: OpportunityTypeEnum;
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
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson2: SalesPersons;
    /**
     * One-to-one navigation property to the [[SalesOpportunitySourcesSetup]] entity.
     */
    salesOpportunitySourceSetup: SalesOpportunitySourcesSetup;
    /**
     * One-to-one navigation property to the [[SalesOpportunityInterestsSetup]] entity.
     */
    salesOpportunityInterestSetup: SalesOpportunityInterestsSetup;
    /**
     * One-to-one navigation property to the [[SalesOpportunityReasonsSetup]] entity.
     */
    salesOpportunityReasonSetup: SalesOpportunityReasonsSetup;
    /**
     * One-to-one navigation property to the [[SalesStages]] entity.
     */
    salesStage: SalesStages;
    /**
     * One-to-one navigation property to the [[Industries]] entity.
     */
    industry2: Industries;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project: Projects;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[Territories]] entity.
     */
    territory2: Territories;
    /**
     * Returns an entity builder to construct instances of `SalesOpportunities`.
     * @returns A builder that constructs instances of entity type `SalesOpportunities`.
     */
    static builder(): EntityBuilderType<SalesOpportunities, SalesOpportunitiesType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunities` entity type.
     * @returns A `SalesOpportunities` request builder.
     */
    static requestBuilder(): SalesOpportunitiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunities`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesOpportunities>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
    sequentialNo?: number | null;
    cardCode?: string | null;
    salesPerson?: number | null;
    contactPerson?: number | null;
    source?: number | null;
    interestField1?: number | null;
    interestField2?: number | null;
    interestField3?: number | null;
    interestLevel?: number | null;
    startDate?: Moment | null;
    predictedClosingDate?: Moment | null;
    maxLocalTotal?: number | null;
    maxSystemTotal?: number | null;
    weightedSumLc?: number | null;
    weightedSumSc?: number | null;
    grossProfit?: number | null;
    grossProfitTotalLocal?: number | null;
    grossProfitTotalSystem?: number | null;
    remarks?: string | null;
    status?: BoSoOsStatus | null;
    reasonForClosing?: number | null;
    totalAmountLocal?: number | null;
    totalAmounSystem?: number | null;
    closingGrossProfitLocal?: number | null;
    closingGrossProfitSystem?: number | null;
    closingPercentage?: number | null;
    currentStageNo?: number | null;
    currentStageNumber?: number | null;
    opportunityName?: string | null;
    industry?: number | null;
    linkedDocumentType?: string | null;
    dataOwnershipfield?: number | null;
    statusRemarks?: string | null;
    projectCode?: string | null;
    bpChanelName?: string | null;
    userSignature?: number | null;
    customerName?: string | null;
    documentCheckbox?: string | null;
    linkedDocumentNumber?: number | null;
    territory?: number | null;
    closingDate?: Moment | null;
    bpChannelContact?: number | null;
    bpChanelCode?: string | null;
    closingType?: BoSoClosedInTypes | null;
    attachmentEntry?: number | null;
    opportunityType?: OpportunityTypeEnum | null;
    updateDate?: Moment | null;
    updateTime?: Time | null;
    salesOpportunitiesLines?: SalesOpportunitiesLine[] | null;
    salesOpportunitiesCompetition?: SalesOpportunitiesCompetitionItem[] | null;
    salesOpportunitiesPartners?: SalesOpportunitiesPartner[] | null;
    salesOpportunitiesInterests?: SalesOpportunitiesInterest[] | null;
    salesOpportunitiesReasons?: SalesOpportunitiesReason[] | null;
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
export declare namespace SalesOpportunities {
    /**
     * Static representation of the [[sequentialNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENTIAL_NO: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[salesPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[interestField1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_FIELD_1: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[interestField2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_FIELD_2: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[interestField3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_FIELD_3: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[interestLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_LEVEL: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<SalesOpportunities>;
    /**
     * Static representation of the [[predictedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREDICTED_CLOSING_DATE: DateField<SalesOpportunities>;
    /**
     * Static representation of the [[maxLocalTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_LOCAL_TOTAL: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[maxSystemTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_SYSTEM_TOTAL: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[weightedSumLc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHTED_SUM_LC: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[weightedSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHTED_SUM_SC: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[grossProfit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROSS_PROFIT: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[grossProfitTotalLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROSS_PROFIT_TOTAL_LOCAL: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[grossProfitTotalSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROSS_PROFIT_TOTAL_SYSTEM: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<SalesOpportunities>;
    /**
     * Static representation of the [[reasonForClosing]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_FOR_CLOSING: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[totalAmountLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_AMOUNT_LOCAL: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[totalAmounSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_AMOUN_SYSTEM: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[closingGrossProfitLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_GROSS_PROFIT_LOCAL: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[closingGrossProfitSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_GROSS_PROFIT_SYSTEM: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[closingPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_PERCENTAGE: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[currentStageNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_STAGE_NO: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[currentStageNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_STAGE_NUMBER: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[opportunityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPPORTUNITY_NAME: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[linkedDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_DOCUMENT_TYPE: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[dataOwnershipfield]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_OWNERSHIPFIELD: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[statusRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_REMARKS: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_CODE: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[bpChanelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CHANEL_NAME: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NAME: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[documentCheckbox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_CHECKBOX: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[linkedDocumentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_DOCUMENT_NUMBER: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[territory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_DATE: DateField<SalesOpportunities>;
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CHANNEL_CONTACT: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[bpChanelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CHANEL_CODE: StringField<SalesOpportunities>;
    /**
     * Static representation of the [[closingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_TYPE: EnumField<SalesOpportunities>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<SalesOpportunities>;
    /**
     * Static representation of the [[opportunityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPPORTUNITY_TYPE: EnumField<SalesOpportunities>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<SalesOpportunities>;
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_TIME: TimeField<SalesOpportunities>;
    /**
     * Static representation of the [[salesOpportunitiesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES_LINES: CollectionField<SalesOpportunities, SalesOpportunitiesLine>;
    /**
     * Static representation of the [[salesOpportunitiesCompetition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES_COMPETITION: CollectionField<SalesOpportunities, SalesOpportunitiesCompetitionItem>;
    /**
     * Static representation of the [[salesOpportunitiesPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES_PARTNERS: CollectionField<SalesOpportunities, SalesOpportunitiesPartner>;
    /**
     * Static representation of the [[salesOpportunitiesInterests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES_INTERESTS: CollectionField<SalesOpportunities, SalesOpportunitiesInterest>;
    /**
     * Static representation of the [[salesOpportunitiesReasons]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES_REASONS: CollectionField<SalesOpportunities, SalesOpportunitiesReason>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<SalesOpportunities, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON_2: OneToOneLink<SalesOpportunities, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[salesOpportunitySourceSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITY_SOURCE_SETUP: OneToOneLink<SalesOpportunities, SalesOpportunitySourcesSetup>;
    /**
     * Static representation of the one-to-one navigation property [[salesOpportunityInterestSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITY_INTEREST_SETUP: OneToOneLink<SalesOpportunities, SalesOpportunityInterestsSetup>;
    /**
     * Static representation of the one-to-one navigation property [[salesOpportunityReasonSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITY_REASON_SETUP: OneToOneLink<SalesOpportunities, SalesOpportunityReasonsSetup>;
    /**
     * Static representation of the one-to-one navigation property [[salesStage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_STAGE: OneToOneLink<SalesOpportunities, SalesStages>;
    /**
     * Static representation of the one-to-one navigation property [[industry2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_2: OneToOneLink<SalesOpportunities, Industries>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<SalesOpportunities, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: OneToOneLink<SalesOpportunities, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<SalesOpportunities, Users>;
    /**
     * Static representation of the one-to-one navigation property [[territory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY_2: OneToOneLink<SalesOpportunities, Territories>;
    /**
     * All fields of the SalesOpportunities entity.
     */
    const _allFields: Array<NumberField<SalesOpportunities> | StringField<SalesOpportunities> | DateField<SalesOpportunities> | EnumField<SalesOpportunities> | TimeField<SalesOpportunities> | CollectionField<SalesOpportunities, SalesOpportunitiesLine> | CollectionField<SalesOpportunities, SalesOpportunitiesCompetitionItem> | CollectionField<SalesOpportunities, SalesOpportunitiesPartner> | CollectionField<SalesOpportunities, SalesOpportunitiesInterest> | CollectionField<SalesOpportunities, SalesOpportunitiesReason> | OneToOneLink<SalesOpportunities, BusinessPartners> | OneToOneLink<SalesOpportunities, SalesPersons> | OneToOneLink<SalesOpportunities, SalesOpportunitySourcesSetup> | OneToOneLink<SalesOpportunities, SalesOpportunityInterestsSetup> | OneToOneLink<SalesOpportunities, SalesOpportunityReasonsSetup> | OneToOneLink<SalesOpportunities, SalesStages> | OneToOneLink<SalesOpportunities, Industries> | OneToOneLink<SalesOpportunities, EmployeesInfo> | OneToOneLink<SalesOpportunities, Projects> | OneToOneLink<SalesOpportunities, Users> | OneToOneLink<SalesOpportunities, Territories>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesOpportunities>;
    /**
     * All key fields of the SalesOpportunities entity.
     */
    const _keyFields: Array<Field<SalesOpportunities>>;
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunities.
     */
    const _keys: {
        [keys: string]: Field<SalesOpportunities>;
    };
}
//# sourceMappingURL=SalesOpportunities.d.ts.map
import { ServiceContractsRequestBuilder } from './ServiceContractsRequestBuilder';
import { Moment } from 'moment';
import { ServiceContractLine } from './ServiceContractLine';
import { BoSvcContractStatus } from './BoSvcContractStatus';
import { BoContractTypes } from './BoContractTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoServiceTypes } from './BoServiceTypes';
import { BoResponseUnit } from './BoResponseUnit';
import { ServiceTypeEnum } from './ServiceTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ServiceContracts" of service "SAPB1".
 */
export declare class ServiceContracts extends EntityV4 implements ServiceContractsType {
    /**
     * Technical entity name for ServiceContracts.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Contract Id.
     * @nullable
     */
    contractId?: number;
    /**
     * Customer Code.
     * @nullable
     */
    customerCode?: string;
    /**
     * Customer Name.
     * @nullable
     */
    customerName?: string;
    /**
     * Contact Code.
     * @nullable
     */
    contactCode?: number;
    /**
     * Owner.
     * @nullable
     */
    owner?: number;
    /**
     * Status.
     * @nullable
     */
    status?: BoSvcContractStatus;
    /**
     * Contract Template.
     * @nullable
     */
    contractTemplate?: string;
    /**
     * Contract Type.
     * @nullable
     */
    contractType?: BoContractTypes;
    /**
     * Renewal.
     * @nullable
     */
    renewal?: BoYesNoEnum;
    /**
     * Reminder Time.
     * @nullable
     */
    reminderTime?: number;
    /**
     * Remind Unit.
     * @nullable
     */
    remindUnit?: BoRemindUnits;
    /**
     * Duration Of Coverage.
     * @nullable
     */
    durationOfCoverage?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Resolution Time.
     * @nullable
     */
    resolutionTime?: number;
    /**
     * Resolution Unit.
     * @nullable
     */
    resolutionUnit?: BoResolutionUnits;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Monday Enabled.
     * @nullable
     */
    mondayEnabled?: BoYesNoEnum;
    /**
     * Tuesday Enabled.
     * @nullable
     */
    tuesdayEnabled?: BoYesNoEnum;
    /**
     * Wednesday Enabled.
     * @nullable
     */
    wednesdayEnabled?: BoYesNoEnum;
    /**
     * Thursday Enabled.
     * @nullable
     */
    thursdayEnabled?: BoYesNoEnum;
    /**
     * Friday Enabled.
     * @nullable
     */
    fridayEnabled?: BoYesNoEnum;
    /**
     * Saturday Enabled.
     * @nullable
     */
    saturdayEnabled?: BoYesNoEnum;
    /**
     * Sunday Enabled.
     * @nullable
     */
    sundayEnabled?: BoYesNoEnum;
    /**
     * Monday Start.
     * @nullable
     */
    mondayStart?: Time;
    /**
     * Monday End.
     * @nullable
     */
    mondayEnd?: Time;
    /**
     * Tuesday Start.
     * @nullable
     */
    tuesdayStart?: Time;
    /**
     * Tuesday End.
     * @nullable
     */
    tuesdayEnd?: Time;
    /**
     * Wednesday Start.
     * @nullable
     */
    wednesdayStart?: Time;
    /**
     * Wednesday End.
     * @nullable
     */
    wednesdayEnd?: Time;
    /**
     * Thursday Start.
     * @nullable
     */
    thursdayStart?: Time;
    /**
     * Thursday End.
     * @nullable
     */
    thursdayEnd?: Time;
    /**
     * Friday Start.
     * @nullable
     */
    fridayStart?: Time;
    /**
     * Friday End.
     * @nullable
     */
    fridayEnd?: Time;
    /**
     * Saturday Start.
     * @nullable
     */
    saturdayStart?: Time;
    /**
     * Saturday End.
     * @nullable
     */
    saturdayEnd?: Time;
    /**
     * Sunday Start.
     * @nullable
     */
    sundayStart?: Time;
    /**
     * Sunday End.
     * @nullable
     */
    sundayEnd?: Time;
    /**
     * Include Parts.
     * @nullable
     */
    includeParts?: BoYesNoEnum;
    /**
     * Include Labor.
     * @nullable
     */
    includeLabor?: BoYesNoEnum;
    /**
     * Include Travel.
     * @nullable
     */
    includeTravel?: BoYesNoEnum;
    /**
     * Template Remarks.
     * @nullable
     */
    templateRemarks?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Include Holidays.
     * @nullable
     */
    includeHolidays?: BoYesNoEnum;
    /**
     * Service Type.
     * @nullable
     */
    serviceType?: BoServiceTypes;
    /**
     * Response Unit.
     * @nullable
     */
    responseUnit?: BoResponseUnit;
    /**
     * Response Time.
     * @nullable
     */
    responseTime?: number;
    /**
     * Termination Date.
     * @nullable
     */
    terminationDate?: Moment;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Service Bp Type.
     * @nullable
     */
    serviceBpType?: ServiceTypeEnum;
    /**
     * Service Contract Lines.
     * @nullable
     */
    serviceContractLines?: ServiceContractLine[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[ContractTemplates]] entity.
     */
    contractTemplate2: ContractTemplates;
    /**
     * One-to-one navigation property to the [[Attachments2]] entity.
     */
    attachments2: Attachments2;
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * Returns an entity builder to construct instances of `ServiceContracts`.
     * @returns A builder that constructs instances of entity type `ServiceContracts`.
     */
    static builder(): EntityBuilderType<ServiceContracts, ServiceContractsType>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceContracts` entity type.
     * @returns A `ServiceContracts` request builder.
     */
    static requestBuilder(): ServiceContractsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceContracts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceContracts`.
     */
    static customField(fieldName: string): CustomFieldV4<ServiceContracts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Users, UsersType } from './Users';
import { ContractTemplates, ContractTemplatesType } from './ContractTemplates';
import { Attachments2, Attachments2Type } from './Attachments2';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ServiceContractsType {
    contractId?: number | null;
    customerCode?: string | null;
    customerName?: string | null;
    contactCode?: number | null;
    owner?: number | null;
    status?: BoSvcContractStatus | null;
    contractTemplate?: string | null;
    contractType?: BoContractTypes | null;
    renewal?: BoYesNoEnum | null;
    reminderTime?: number | null;
    remindUnit?: BoRemindUnits | null;
    durationOfCoverage?: number | null;
    startDate?: Moment | null;
    endDate?: Moment | null;
    resolutionTime?: number | null;
    resolutionUnit?: BoResolutionUnits | null;
    description?: string | null;
    mondayEnabled?: BoYesNoEnum | null;
    tuesdayEnabled?: BoYesNoEnum | null;
    wednesdayEnabled?: BoYesNoEnum | null;
    thursdayEnabled?: BoYesNoEnum | null;
    fridayEnabled?: BoYesNoEnum | null;
    saturdayEnabled?: BoYesNoEnum | null;
    sundayEnabled?: BoYesNoEnum | null;
    mondayStart?: Time | null;
    mondayEnd?: Time | null;
    tuesdayStart?: Time | null;
    tuesdayEnd?: Time | null;
    wednesdayStart?: Time | null;
    wednesdayEnd?: Time | null;
    thursdayStart?: Time | null;
    thursdayEnd?: Time | null;
    fridayStart?: Time | null;
    fridayEnd?: Time | null;
    saturdayStart?: Time | null;
    saturdayEnd?: Time | null;
    sundayStart?: Time | null;
    sundayEnd?: Time | null;
    includeParts?: BoYesNoEnum | null;
    includeLabor?: BoYesNoEnum | null;
    includeTravel?: BoYesNoEnum | null;
    templateRemarks?: string | null;
    remarks?: string | null;
    includeHolidays?: BoYesNoEnum | null;
    serviceType?: BoServiceTypes | null;
    responseUnit?: BoResponseUnit | null;
    responseTime?: number | null;
    terminationDate?: Moment | null;
    attachmentEntry?: number | null;
    serviceBpType?: ServiceTypeEnum | null;
    serviceContractLines?: ServiceContractLine[] | null;
    businessPartner: BusinessPartnersType;
    user: UsersType;
    contractTemplate2: ContractTemplatesType;
    attachments2: Attachments2Type;
    serviceCalls: ServiceCallsType[];
}
export declare namespace ServiceContracts {
    /**
     * Static representation of the [[contractId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_ID: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CODE: StringField<ServiceContracts>;
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NAME: StringField<ServiceContracts>;
    /**
     * Static representation of the [[contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_CODE: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[contractTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_TEMPLATE: StringField<ServiceContracts>;
    /**
     * Static representation of the [[contractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_TYPE: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[renewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RENEWAL: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[reminderTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_TIME: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[remindUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMIND_UNIT: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[durationOfCoverage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION_OF_COVERAGE: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<ServiceContracts>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<ServiceContracts>;
    /**
     * Static representation of the [[resolutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_TIME: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[resolutionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_UNIT: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceContracts>;
    /**
     * Static representation of the [[mondayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY_ENABLED: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[tuesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY_ENABLED: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[wednesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY_ENABLED: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[thursdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY_ENABLED: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[fridayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY_ENABLED: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[saturdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY_ENABLED: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[sundayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY_ENABLED: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[mondayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY_START: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[mondayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY_END: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[tuesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY_START: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[tuesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY_END: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[wednesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY_START: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[wednesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY_END: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[thursdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY_START: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[thursdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY_END: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[fridayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY_START: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[fridayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY_END: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[saturdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY_START: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[saturdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY_END: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[sundayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY_START: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[sundayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY_END: TimeField<ServiceContracts>;
    /**
     * Static representation of the [[includeParts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_PARTS: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[includeLabor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_LABOR: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[includeTravel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_TRAVEL: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[templateRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_REMARKS: StringField<ServiceContracts>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<ServiceContracts>;
    /**
     * Static representation of the [[includeHolidays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_HOLIDAYS: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[serviceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_TYPE: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[responseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_UNIT: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[responseTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_TIME: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[terminationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERMINATION_DATE: DateField<ServiceContracts>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<ServiceContracts>;
    /**
     * Static representation of the [[serviceBpType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_BP_TYPE: EnumField<ServiceContracts>;
    /**
     * Static representation of the [[serviceContractLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CONTRACT_LINES: CollectionField<ServiceContracts, ServiceContractLine>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<ServiceContracts, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<ServiceContracts, Users>;
    /**
     * Static representation of the one-to-one navigation property [[contractTemplate2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_TEMPLATE_2: OneToOneLink<ServiceContracts, ContractTemplates>;
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENTS_2: OneToOneLink<ServiceContracts, Attachments2>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ServiceContracts, ServiceCalls>;
    /**
     * All fields of the ServiceContracts entity.
     */
    const _allFields: Array<NumberField<ServiceContracts> | StringField<ServiceContracts> | EnumField<ServiceContracts> | DateField<ServiceContracts> | TimeField<ServiceContracts> | CollectionField<ServiceContracts, ServiceContractLine> | OneToOneLink<ServiceContracts, BusinessPartners> | OneToOneLink<ServiceContracts, Users> | OneToOneLink<ServiceContracts, ContractTemplates> | OneToOneLink<ServiceContracts, Attachments2> | OneToManyLink<ServiceContracts, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceContracts>;
    /**
     * All key fields of the ServiceContracts entity.
     */
    const _keyFields: Array<Field<ServiceContracts>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceContracts.
     */
    const _keys: {
        [keys: string]: Field<ServiceContracts>;
    };
}
//# sourceMappingURL=ServiceContracts.d.ts.map
import { ContractTemplatesRequestBuilder } from './ContractTemplatesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoContractTypes } from './BoContractTypes';
import { BoResponseUnit } from './BoResponseUnit';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ContractTemplates" of service "SAPB1".
 */
export declare class ContractTemplates extends EntityV4 implements ContractTemplatesType {
    /**
     * Technical entity name for ContractTemplates.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Template Name.
     * @nullable
     */
    templateName?: string;
    /**
     * Template Is Deleted.
     * @nullable
     */
    templateIsDeleted?: BoYesNoEnum;
    /**
     * Template Is Renewal.
     * @nullable
     */
    templateIsRenewal?: BoYesNoEnum;
    /**
     * Remind Before Renewal.
     * @nullable
     */
    remindBeforeRenewal?: number;
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
     * Response Value.
     * @nullable
     */
    responseValue?: number;
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
     * Contract Type.
     * @nullable
     */
    contractType?: BoContractTypes;
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
     * Response Unit.
     * @nullable
     */
    responseUnit?: BoResponseUnit;
    /**
     * Resolution Time.
     * @nullable
     */
    resolutionTime?: number;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[ServiceContracts]] entity.
     */
    serviceContracts: ServiceContracts[];
    /**
     * Returns an entity builder to construct instances of `ContractTemplates`.
     * @returns A builder that constructs instances of entity type `ContractTemplates`.
     */
    static builder(): EntityBuilderType<ContractTemplates, ContractTemplatesType>;
    /**
     * Returns a request builder to construct requests for operations on the `ContractTemplates` entity type.
     * @returns A `ContractTemplates` request builder.
     */
    static requestBuilder(): ContractTemplatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContractTemplates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContractTemplates`.
     */
    static customField(fieldName: string): CustomFieldV4<ContractTemplates>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
export interface ContractTemplatesType {
    templateName?: string | null;
    templateIsDeleted?: BoYesNoEnum | null;
    templateIsRenewal?: BoYesNoEnum | null;
    remindBeforeRenewal?: number | null;
    remindUnit?: BoRemindUnits | null;
    durationOfCoverage?: number | null;
    responseValue?: number | null;
    resolutionUnit?: BoResolutionUnits | null;
    description?: string | null;
    contractType?: BoContractTypes | null;
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
    remarks?: string | null;
    includeHolidays?: BoYesNoEnum | null;
    responseUnit?: BoResponseUnit | null;
    resolutionTime?: number | null;
    attachmentEntry?: number | null;
    items: ItemsType[];
    serviceContracts: ServiceContractsType[];
}
export declare namespace ContractTemplates {
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_NAME: StringField<ContractTemplates>;
    /**
     * Static representation of the [[templateIsDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_IS_DELETED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[templateIsRenewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_IS_RENEWAL: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[remindBeforeRenewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMIND_BEFORE_RENEWAL: NumberField<ContractTemplates>;
    /**
     * Static representation of the [[remindUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMIND_UNIT: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[durationOfCoverage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION_OF_COVERAGE: NumberField<ContractTemplates>;
    /**
     * Static representation of the [[responseValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_VALUE: NumberField<ContractTemplates>;
    /**
     * Static representation of the [[resolutionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_UNIT: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ContractTemplates>;
    /**
     * Static representation of the [[contractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_TYPE: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[mondayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY_ENABLED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[tuesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY_ENABLED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[wednesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY_ENABLED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[thursdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY_ENABLED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[fridayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY_ENABLED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[saturdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY_ENABLED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[sundayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY_ENABLED: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[mondayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY_START: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[mondayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY_END: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[tuesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY_START: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[tuesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY_END: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[wednesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY_START: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[wednesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY_END: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[thursdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY_START: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[thursdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY_END: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[fridayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY_START: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[fridayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY_END: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[saturdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY_START: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[saturdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY_END: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[sundayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY_START: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[sundayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY_END: TimeField<ContractTemplates>;
    /**
     * Static representation of the [[includeParts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_PARTS: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[includeLabor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_LABOR: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[includeTravel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_TRAVEL: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<ContractTemplates>;
    /**
     * Static representation of the [[includeHolidays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_HOLIDAYS: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[responseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_UNIT: EnumField<ContractTemplates>;
    /**
     * Static representation of the [[resolutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_TIME: NumberField<ContractTemplates>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<ContractTemplates>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<ContractTemplates, Items>;
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CONTRACTS: OneToManyLink<ContractTemplates, ServiceContracts>;
    /**
     * All fields of the ContractTemplates entity.
     */
    const _allFields: Array<StringField<ContractTemplates> | EnumField<ContractTemplates> | NumberField<ContractTemplates> | TimeField<ContractTemplates> | OneToManyLink<ContractTemplates, Items> | OneToManyLink<ContractTemplates, ServiceContracts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ContractTemplates>;
    /**
     * All key fields of the ContractTemplates entity.
     */
    const _keyFields: Array<Field<ContractTemplates>>;
    /**
     * Mapping of all key field names to the respective static field property ContractTemplates.
     */
    const _keys: {
        [keys: string]: Field<ContractTemplates>;
    };
}
//# sourceMappingURL=ContractTemplates.d.ts.map
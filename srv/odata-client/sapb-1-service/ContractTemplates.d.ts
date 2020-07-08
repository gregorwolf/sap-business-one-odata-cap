import { ContractTemplatesRequestBuilder } from './ContractTemplatesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ContractTemplates" of service "SAPB1".
 */
export declare class ContractTemplates extends Entity implements ContractTemplatesType {
    /**
     * Technical entity name for ContractTemplates.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ContractTemplates.
     */
    static _serviceName: string;
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
     * Remind Before Renewal.
     * @nullable
     */
    remindBeforeRenewal?: number;
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
     * Description.
     * @nullable
     */
    description?: string;
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
     * Remarks.
     * @nullable
     */
    remarks?: string;
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
     * Returns an entity builder to construct instances `ContractTemplates`.
     * @returns A builder that constructs instances of entity type `ContractTemplates`.
     */
    static builder(): EntityBuilderType<ContractTemplates, ContractTemplatesTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<ContractTemplates>;
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
    templateName?: string;
    remindBeforeRenewal?: number;
    durationOfCoverage?: number;
    responseValue?: number;
    description?: string;
    mondayStart?: Time;
    mondayEnd?: Time;
    tuesdayStart?: Time;
    tuesdayEnd?: Time;
    wednesdayStart?: Time;
    wednesdayEnd?: Time;
    thursdayStart?: Time;
    thursdayEnd?: Time;
    fridayStart?: Time;
    fridayEnd?: Time;
    saturdayStart?: Time;
    saturdayEnd?: Time;
    sundayStart?: Time;
    sundayEnd?: Time;
    remarks?: string;
    resolutionTime?: number;
    attachmentEntry?: number;
    items: ItemsType[];
    serviceContracts: ServiceContractsType[];
}
export interface ContractTemplatesTypeForceMandatory {
    templateName: string;
    remindBeforeRenewal: number;
    durationOfCoverage: number;
    responseValue: number;
    description: string;
    mondayStart: Time;
    mondayEnd: Time;
    tuesdayStart: Time;
    tuesdayEnd: Time;
    wednesdayStart: Time;
    wednesdayEnd: Time;
    thursdayStart: Time;
    thursdayEnd: Time;
    fridayStart: Time;
    fridayEnd: Time;
    saturdayStart: Time;
    saturdayEnd: Time;
    sundayStart: Time;
    sundayEnd: Time;
    remarks: string;
    resolutionTime: number;
    attachmentEntry: number;
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
     * Static representation of the [[remindBeforeRenewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMIND_BEFORE_RENEWAL: NumberField<ContractTemplates>;
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
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ContractTemplates>;
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
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<ContractTemplates>;
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
    const _allFields: Array<StringField<ContractTemplates> | NumberField<ContractTemplates> | TimeField<ContractTemplates> | OneToManyLink<ContractTemplates, Items> | OneToManyLink<ContractTemplates, ServiceContracts>>;
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
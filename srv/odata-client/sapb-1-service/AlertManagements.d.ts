import { AlertManagementsRequestBuilder } from './AlertManagementsRequestBuilder';
import { Moment } from 'moment';
import { AlertManagementRecipient } from './AlertManagementRecipient';
import { AlertManagementDocument } from './AlertManagementDocument';
import { AlertManagementTypeEnum } from './AlertManagementTypeEnum';
import { AlertManagementPriorityEnum } from './AlertManagementPriorityEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AlertManagementFrequencyType } from './AlertManagementFrequencyType';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AlertManagements" of service "SAPB1".
 */
export declare class AlertManagements extends EntityV4 implements AlertManagementsType {
    /**
     * Technical entity name for AlertManagements.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Type.
     * @nullable
     */
    type?: AlertManagementTypeEnum;
    /**
     * Priority.
     * @nullable
     */
    priority?: AlertManagementPriorityEnum;
    /**
     * Active.
     * @nullable
     */
    active?: BoYesNoEnum;
    /**
     * Param.
     * @nullable
     */
    param?: string;
    /**
     * Query Id.
     * @nullable
     */
    queryId?: number;
    /**
     * Frequency Type.
     * @nullable
     */
    frequencyType?: AlertManagementFrequencyType;
    /**
     * Day Of Execution.
     * @nullable
     */
    dayOfExecution?: number;
    /**
     * Execution Time.
     * @nullable
     */
    executionTime?: Time;
    /**
     * Last Execution Date.
     * @nullable
     */
    lastExecutionDate?: Moment;
    /**
     * Last Execution Time.
     * @nullable
     */
    lastExecutionTime?: number;
    /**
     * Next Execution Date.
     * @nullable
     */
    nextExecutionDate?: Moment;
    /**
     * Next Execution Time.
     * @nullable
     */
    nextExecutionTime?: Time;
    /**
     * Save History.
     * @nullable
     */
    saveHistory?: BoYesNoEnum;
    /**
     * Frequency Interval.
     * @nullable
     */
    frequencyInterval?: number;
    /**
     * Alert Management Recipients.
     * @nullable
     */
    alertManagementRecipients?: AlertManagementRecipient[];
    /**
     * Alert Management Documents.
     * @nullable
     */
    alertManagementDocuments?: AlertManagementDocument[];
    /**
     * Returns an entity builder to construct instances of `AlertManagements`.
     * @returns A builder that constructs instances of entity type `AlertManagements`.
     */
    static builder(): EntityBuilderType<AlertManagements, AlertManagementsType>;
    /**
     * Returns a request builder to construct requests for operations on the `AlertManagements` entity type.
     * @returns A `AlertManagements` request builder.
     */
    static requestBuilder(): AlertManagementsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlertManagements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AlertManagements`.
     */
    static customField(fieldName: string): CustomFieldV4<AlertManagements>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface AlertManagementsType {
    code?: number | null;
    name?: string | null;
    type?: AlertManagementTypeEnum | null;
    priority?: AlertManagementPriorityEnum | null;
    active?: BoYesNoEnum | null;
    param?: string | null;
    queryId?: number | null;
    frequencyType?: AlertManagementFrequencyType | null;
    dayOfExecution?: number | null;
    executionTime?: Time | null;
    lastExecutionDate?: Moment | null;
    lastExecutionTime?: number | null;
    nextExecutionDate?: Moment | null;
    nextExecutionTime?: Time | null;
    saveHistory?: BoYesNoEnum | null;
    frequencyInterval?: number | null;
    alertManagementRecipients?: AlertManagementRecipient[] | null;
    alertManagementDocuments?: AlertManagementDocument[] | null;
}
export declare namespace AlertManagements {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<AlertManagements>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<AlertManagements>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: EnumField<AlertManagements>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: EnumField<AlertManagements>;
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE: EnumField<AlertManagements>;
    /**
     * Static representation of the [[param]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARAM: StringField<AlertManagements>;
    /**
     * Static representation of the [[queryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUERY_ID: NumberField<AlertManagements>;
    /**
     * Static representation of the [[frequencyType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_TYPE: EnumField<AlertManagements>;
    /**
     * Static representation of the [[dayOfExecution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY_OF_EXECUTION: NumberField<AlertManagements>;
    /**
     * Static representation of the [[executionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXECUTION_TIME: TimeField<AlertManagements>;
    /**
     * Static representation of the [[lastExecutionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_EXECUTION_DATE: DateField<AlertManagements>;
    /**
     * Static representation of the [[lastExecutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_EXECUTION_TIME: NumberField<AlertManagements>;
    /**
     * Static representation of the [[nextExecutionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_EXECUTION_DATE: DateField<AlertManagements>;
    /**
     * Static representation of the [[nextExecutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_EXECUTION_TIME: TimeField<AlertManagements>;
    /**
     * Static representation of the [[saveHistory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAVE_HISTORY: EnumField<AlertManagements>;
    /**
     * Static representation of the [[frequencyInterval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_INTERVAL: NumberField<AlertManagements>;
    /**
     * Static representation of the [[alertManagementRecipients]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALERT_MANAGEMENT_RECIPIENTS: CollectionField<AlertManagements, AlertManagementRecipient>;
    /**
     * Static representation of the [[alertManagementDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALERT_MANAGEMENT_DOCUMENTS: CollectionField<AlertManagements, AlertManagementDocument>;
    /**
     * All fields of the AlertManagements entity.
     */
    const _allFields: Array<NumberField<AlertManagements> | StringField<AlertManagements> | EnumField<AlertManagements> | TimeField<AlertManagements> | DateField<AlertManagements> | CollectionField<AlertManagements, AlertManagementRecipient> | CollectionField<AlertManagements, AlertManagementDocument>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AlertManagements>;
    /**
     * All key fields of the AlertManagements entity.
     */
    const _keyFields: Array<Field<AlertManagements>>;
    /**
     * Mapping of all key field names to the respective static field property AlertManagements.
     */
    const _keys: {
        [keys: string]: Field<AlertManagements>;
    };
}
//# sourceMappingURL=AlertManagements.d.ts.map
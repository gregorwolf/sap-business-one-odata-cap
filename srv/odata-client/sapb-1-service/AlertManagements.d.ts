import { AlertManagementsRequestBuilder } from './AlertManagementsRequestBuilder';
import { Moment } from 'moment';
import { AlertManagementRecipient } from './AlertManagementRecipient';
import { AlertManagementDocument } from './AlertManagementDocument';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "AlertManagements" of service "SAPB1".
 */
export declare class AlertManagements extends Entity implements AlertManagementsType {
    /**
     * Technical entity name for AlertManagements.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AlertManagements.
     */
    static _serviceName: string;
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
     * Returns an entity builder to construct instances `AlertManagements`.
     * @returns A builder that constructs instances of entity type `AlertManagements`.
     */
    static builder(): EntityBuilderType<AlertManagements, AlertManagementsTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<AlertManagements>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface AlertManagementsType {
    code?: number;
    name?: string;
    param?: string;
    queryId?: number;
    dayOfExecution?: number;
    executionTime?: Time;
    lastExecutionDate?: Moment;
    lastExecutionTime?: number;
    nextExecutionDate?: Moment;
    nextExecutionTime?: Time;
    frequencyInterval?: number;
    alertManagementRecipients?: AlertManagementRecipient[];
    alertManagementDocuments?: AlertManagementDocument[];
}
export interface AlertManagementsTypeForceMandatory {
    code: number;
    name: string;
    param: string;
    queryId: number;
    dayOfExecution: number;
    executionTime: Time;
    lastExecutionDate: Moment;
    lastExecutionTime: number;
    nextExecutionDate: Moment;
    nextExecutionTime: Time;
    frequencyInterval: number;
    alertManagementRecipients: AlertManagementRecipient[];
    alertManagementDocuments: AlertManagementDocument[];
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
     * Static representation of the [[frequencyInterval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_INTERVAL: NumberField<AlertManagements>;
    /**
     * Static representation of the [[alertManagementRecipients]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALERT_MANAGEMENT_RECIPIENTS: CollectionField<AlertManagements>;
    /**
     * Static representation of the [[alertManagementDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALERT_MANAGEMENT_DOCUMENTS: CollectionField<AlertManagements>;
    /**
     * All fields of the AlertManagements entity.
     */
    const _allFields: Array<NumberField<AlertManagements> | StringField<AlertManagements> | TimeField<AlertManagements> | DateField<AlertManagements> | CollectionField<AlertManagements>>;
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
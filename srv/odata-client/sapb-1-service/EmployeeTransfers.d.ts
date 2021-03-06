import { EmployeeTransfersRequestBuilder } from './EmployeeTransfersRequestBuilder';
import { Moment } from 'moment';
import { EmployeeTransferDetail } from './EmployeeTransferDetail';
import { EmployeeTransferStatusEnum } from './EmployeeTransferStatusEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTransfers" of service "SAPB1".
 */
export declare class EmployeeTransfers extends EntityV4 implements EmployeeTransfersType {
    /**
     * Technical entity name for EmployeeTransfers.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Transfer Id.
     * @nullable
     */
    transferId?: number;
    /**
     * Trans Start Date.
     * @nullable
     */
    transStartDate?: Moment;
    /**
     * Trans Start Time.
     * @nullable
     */
    transStartTime?: Time;
    /**
     * Trans End Date.
     * @nullable
     */
    transEndDate?: Moment;
    /**
     * Trans End Time.
     * @nullable
     */
    transEndTime?: Time;
    /**
     * Status.
     * @nullable
     */
    status?: EmployeeTransferStatusEnum;
    /**
     * Comment.
     * @nullable
     */
    comment?: string;
    /**
     * Employee Transfer Details.
     * @nullable
     */
    employeeTransferDetails?: EmployeeTransferDetail[];
    /**
     * Returns an entity builder to construct instances of `EmployeeTransfers`.
     * @returns A builder that constructs instances of entity type `EmployeeTransfers`.
     */
    static builder(): EntityBuilderType<EmployeeTransfers, EmployeeTransfersType>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTransfers` entity type.
     * @returns A `EmployeeTransfers` request builder.
     */
    static requestBuilder(): EmployeeTransfersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTransfers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTransfers`.
     */
    static customField(fieldName: string): CustomFieldV4<EmployeeTransfers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmployeeTransfersType {
    transferId?: number | null;
    transStartDate?: Moment | null;
    transStartTime?: Time | null;
    transEndDate?: Moment | null;
    transEndTime?: Time | null;
    status?: EmployeeTransferStatusEnum | null;
    comment?: string | null;
    employeeTransferDetails?: EmployeeTransferDetail[] | null;
}
export declare namespace EmployeeTransfers {
    /**
     * Static representation of the [[transferId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_ID: NumberField<EmployeeTransfers>;
    /**
     * Static representation of the [[transStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_START_DATE: DateField<EmployeeTransfers>;
    /**
     * Static representation of the [[transStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_START_TIME: TimeField<EmployeeTransfers>;
    /**
     * Static representation of the [[transEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_END_DATE: DateField<EmployeeTransfers>;
    /**
     * Static representation of the [[transEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_END_TIME: TimeField<EmployeeTransfers>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<EmployeeTransfers>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<EmployeeTransfers>;
    /**
     * Static representation of the [[employeeTransferDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TRANSFER_DETAILS: CollectionField<EmployeeTransfers, EmployeeTransferDetail>;
    /**
     * All fields of the EmployeeTransfers entity.
     */
    const _allFields: Array<NumberField<EmployeeTransfers> | DateField<EmployeeTransfers> | TimeField<EmployeeTransfers> | EnumField<EmployeeTransfers> | StringField<EmployeeTransfers> | CollectionField<EmployeeTransfers, EmployeeTransferDetail>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTransfers>;
    /**
     * All key fields of the EmployeeTransfers entity.
     */
    const _keyFields: Array<Field<EmployeeTransfers>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTransfers.
     */
    const _keys: {
        [keys: string]: Field<EmployeeTransfers>;
    };
}
//# sourceMappingURL=EmployeeTransfers.d.ts.map
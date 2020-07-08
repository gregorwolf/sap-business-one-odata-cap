import { InternalReconciliationsRequestBuilder } from './InternalReconciliationsRequestBuilder';
import { Moment } from 'moment';
import { InternalReconciliationRow } from './InternalReconciliationRow';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "InternalReconciliations" of service "SAPB1".
 */
export declare class InternalReconciliations extends Entity implements InternalReconciliationsType {
    /**
     * Technical entity name for InternalReconciliations.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InternalReconciliations.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Recon Num.
     * @nullable
     */
    reconNum?: number;
    /**
     * Recon Date.
     * @nullable
     */
    reconDate?: Moment;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Cancel Abs.
     * @nullable
     */
    cancelAbs?: number;
    /**
     * Internal Reconciliation Rows.
     * @nullable
     */
    internalReconciliationRows?: InternalReconciliationRow[];
    /**
     * Returns an entity builder to construct instances `InternalReconciliations`.
     * @returns A builder that constructs instances of entity type `InternalReconciliations`.
     */
    static builder(): EntityBuilderType<InternalReconciliations, InternalReconciliationsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InternalReconciliations` entity type.
     * @returns A `InternalReconciliations` request builder.
     */
    static requestBuilder(): InternalReconciliationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InternalReconciliations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InternalReconciliations`.
     */
    static customField(fieldName: string): CustomField<InternalReconciliations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface InternalReconciliationsType {
    reconNum?: number;
    reconDate?: Moment;
    total?: number;
    cancelAbs?: number;
    internalReconciliationRows?: InternalReconciliationRow[];
}
export interface InternalReconciliationsTypeForceMandatory {
    reconNum: number;
    reconDate: Moment;
    total: number;
    cancelAbs: number;
    internalReconciliationRows: InternalReconciliationRow[];
}
export declare namespace InternalReconciliations {
    /**
     * Static representation of the [[reconNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECON_NUM: NumberField<InternalReconciliations>;
    /**
     * Static representation of the [[reconDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECON_DATE: DateField<InternalReconciliations>;
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL: NumberField<InternalReconciliations>;
    /**
     * Static representation of the [[cancelAbs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCEL_ABS: NumberField<InternalReconciliations>;
    /**
     * Static representation of the [[internalReconciliationRows]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_RECONCILIATION_ROWS: CollectionField<InternalReconciliations>;
    /**
     * All fields of the InternalReconciliations entity.
     */
    const _allFields: Array<NumberField<InternalReconciliations> | DateField<InternalReconciliations> | CollectionField<InternalReconciliations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InternalReconciliations>;
    /**
     * All key fields of the InternalReconciliations entity.
     */
    const _keyFields: Array<Field<InternalReconciliations>>;
    /**
     * Mapping of all key field names to the respective static field property InternalReconciliations.
     */
    const _keys: {
        [keys: string]: Field<InternalReconciliations>;
    };
}
//# sourceMappingURL=InternalReconciliations.d.ts.map
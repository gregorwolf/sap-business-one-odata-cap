import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExternalReconciliationFilterParams
 */
export interface ExternalReconciliationFilterParams {
    /**
     * Account Code From.
     * @nullable
     */
    accountCodeFrom?: string;
    /**
     * Account Code To.
     * @nullable
     */
    accountCodeTo?: string;
    /**
     * Reconciliation Date From.
     * @nullable
     */
    reconciliationDateFrom?: Moment;
    /**
     * Reconciliation Date To.
     * @nullable
     */
    reconciliationDateTo?: Moment;
    /**
     * Reconciliation No From.
     * @nullable
     */
    reconciliationNoFrom?: number;
    /**
     * Reconciliation No To.
     * @nullable
     */
    reconciliationNoTo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationFilterParams.build]] instead.
 */
export declare function createExternalReconciliationFilterParams(json: any): ExternalReconciliationFilterParams;
/**
 * ExternalReconciliationFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalReconciliationFilterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExternalReconciliationFilterParams.accountCodeFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCodeFrom: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.accountCodeTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCodeTo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationNoFrom: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationNoTo: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ExternalReconciliationFilterParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ExternalReconciliationFilterParams;
}
//# sourceMappingURL=ExternalReconciliationFilterParams.d.ts.map
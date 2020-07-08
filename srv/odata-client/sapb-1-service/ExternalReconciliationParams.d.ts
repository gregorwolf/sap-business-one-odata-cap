import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExternalReconciliationParams
 */
export interface ExternalReconciliationParams {
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Reconciliation No.
     * @nullable
     */
    reconciliationNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationParams.build]] instead.
 */
export declare function createExternalReconciliationParams(json: any): ExternalReconciliationParams;
/**
 * ExternalReconciliationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalReconciliationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExternalReconciliationParams.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationParams.reconciliationNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationNo: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ExternalReconciliationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ExternalReconciliationParams;
}
//# sourceMappingURL=ExternalReconciliationParams.d.ts.map
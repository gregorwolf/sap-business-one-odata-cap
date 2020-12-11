import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ExternalReconciliationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalReconciliationParams> {
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
    /**
     * Creates an instance of ExternalReconciliationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExternalReconciliationParams {
    /**
     * Metadata information on all properties of the `ExternalReconciliationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExternalReconciliationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ExternalReconciliationParams;
}
//# sourceMappingURL=ExternalReconciliationParams.d.ts.map
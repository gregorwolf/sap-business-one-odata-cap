import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeeTransferParams
 */
export interface EmployeeTransferParams {
    /**
     * Transfer Id.
     * @nullable
     */
    transferId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferParams.build]] instead.
 */
export declare function createEmployeeTransferParams(json: any): EmployeeTransferParams;
/**
 * EmployeeTransferParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeTransferParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeTransferParams> {
    /**
     * Representation of the [[EmployeeTransferParams.transferId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeTransferParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeTransferParams {
    /**
     * Metadata information on all properties of the `EmployeeTransferParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeTransferParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeTransferParams;
}
//# sourceMappingURL=EmployeeTransferParams.d.ts.map
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeeIdTypeParams
 */
export interface EmployeeIdTypeParams {
    /**
     * Id Type.
     * @nullable
     */
    idType?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeIdTypeParams.build]] instead.
 */
export declare function createEmployeeIdTypeParams(json: any): EmployeeIdTypeParams;
/**
 * EmployeeIdTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeIdTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeIdTypeParams> {
    /**
     * Representation of the [[EmployeeIdTypeParams.idType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    idType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeIdTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeIdTypeParams {
    /**
     * Metadata information on all properties of the `EmployeeIdTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeIdTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeIdTypeParams;
}
//# sourceMappingURL=EmployeeIdTypeParams.d.ts.map
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeeStatusParams
 */
export interface EmployeeStatusParams {
    /**
     * Status Id.
     * @nullable
     */
    statusId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeStatusParams.build]] instead.
 */
export declare function createEmployeeStatusParams(json: any): EmployeeStatusParams;
/**
 * EmployeeStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeStatusParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeStatusParams> {
    /**
     * Representation of the [[EmployeeStatusParams.statusId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeStatusParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeStatusParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeStatusParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeStatusParams {
    /**
     * Metadata information on all properties of the `EmployeeStatusParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeStatusParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeStatusParams;
}
//# sourceMappingURL=EmployeeStatusParams.d.ts.map
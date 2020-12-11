import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ImportFileParam
 */
export interface ImportFileParam {
    /**
     * File Path.
     * @nullable
     */
    filePath?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ImportFileParam.build]] instead.
 */
export declare function createImportFileParam(json: any): ImportFileParam;
/**
 * ImportFileParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ImportFileParamField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ImportFileParam> {
    /**
     * Representation of the [[ImportFileParam.filePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    filePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ImportFileParamField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ImportFileParam {
    /**
     * Metadata information on all properties of the `ImportFileParam` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ImportFileParam>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ImportFileParam;
}
//# sourceMappingURL=ImportFileParam.d.ts.map
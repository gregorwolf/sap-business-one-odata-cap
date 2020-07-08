import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ImportFileParamField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ImportFileParam.filePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    filePath: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ImportFileParam {
    function build(json: {
        [keys: string]: FieldType;
    }): ImportFileParam;
}
//# sourceMappingURL=ImportFileParam.d.ts.map
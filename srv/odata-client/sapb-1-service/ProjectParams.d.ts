import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ProjectParams
 */
export interface ProjectParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ProjectParams.build]] instead.
 */
export declare function createProjectParams(json: any): ProjectParams;
/**
 * ProjectParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProjectParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ProjectParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProjectParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ProjectParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ProjectParams;
}
//# sourceMappingURL=ProjectParams.d.ts.map
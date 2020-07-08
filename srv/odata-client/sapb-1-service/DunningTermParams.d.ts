import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DunningTermParams
 */
export interface DunningTermParams {
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
 * @deprecated Since v1.6.0. Use [[DunningTermParams.build]] instead.
 */
export declare function createDunningTermParams(json: any): DunningTermParams;
/**
 * DunningTermParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DunningTermParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DunningTermParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DunningTermParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DunningTermParams;
}
//# sourceMappingURL=DunningTermParams.d.ts.map
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BranchParams
 */
export interface BranchParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BranchParams.build]] instead.
 */
export declare function createBranchParams(json: any): BranchParams;
/**
 * BranchParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BranchParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BranchParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BranchParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BranchParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BranchParams;
}
//# sourceMappingURL=BranchParams.d.ts.map
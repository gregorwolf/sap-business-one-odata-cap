import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FaAccountDeterminationParams
 */
export interface FaAccountDeterminationParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FaAccountDeterminationParams.build]] instead.
 */
export declare function createFaAccountDeterminationParams(json: any): FaAccountDeterminationParams;
/**
 * FaAccountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FaAccountDeterminationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FaAccountDeterminationParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FaAccountDeterminationParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace FaAccountDeterminationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): FaAccountDeterminationParams;
}
//# sourceMappingURL=FaAccountDeterminationParams.d.ts.map
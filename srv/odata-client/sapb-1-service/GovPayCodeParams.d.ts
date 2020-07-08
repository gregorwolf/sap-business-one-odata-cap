import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * GovPayCodeParams
 */
export interface GovPayCodeParams {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[GovPayCodeParams.build]] instead.
 */
export declare function createGovPayCodeParams(json: any): GovPayCodeParams;
/**
 * GovPayCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GovPayCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GovPayCodeParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GovPayCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace GovPayCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): GovPayCodeParams;
}
//# sourceMappingURL=GovPayCodeParams.d.ts.map
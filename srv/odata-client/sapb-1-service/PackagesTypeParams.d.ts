import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PackagesTypeParams
 */
export interface PackagesTypeParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PackagesTypeParams.build]] instead.
 */
export declare function createPackagesTypeParams(json: any): PackagesTypeParams;
/**
 * PackagesTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PackagesTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PackagesTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PackagesTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PackagesTypeParams;
}
//# sourceMappingURL=PackagesTypeParams.d.ts.map
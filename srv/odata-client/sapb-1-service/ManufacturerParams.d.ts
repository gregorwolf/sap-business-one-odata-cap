import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ManufacturerParams
 */
export interface ManufacturerParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ManufacturerParams.build]] instead.
 */
export declare function createManufacturerParams(json: any): ManufacturerParams;
/**
 * ManufacturerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ManufacturerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ManufacturerParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ManufacturerParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ManufacturerParams;
}
//# sourceMappingURL=ManufacturerParams.d.ts.map
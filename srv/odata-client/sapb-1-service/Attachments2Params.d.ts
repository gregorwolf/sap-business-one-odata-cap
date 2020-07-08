import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * Attachments2Params
 */
export interface Attachments2Params {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[Attachments2Params.build]] instead.
 */
export declare function createAttachments2Params(json: any): Attachments2Params;
/**
 * Attachments2ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Attachments2ParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Attachments2Params.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace Attachments2Params {
    function build(json: {
        [keys: string]: FieldType;
    }): Attachments2Params;
}
//# sourceMappingURL=Attachments2Params.d.ts.map
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ContactParams
 */
export interface ContactParams {
    /**
     * Contact Code.
     * @nullable
     */
    contactCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ContactParams.build]] instead.
 */
export declare function createContactParams(json: any): ContactParams;
/**
 * ContactParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ContactParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ContactParams.contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ContactParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ContactParams;
}
//# sourceMappingURL=ContactParams.d.ts.map
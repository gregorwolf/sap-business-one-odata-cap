import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ValidValueMd
 */
export interface ValidValueMd {
    /**
     * Value.
     * @nullable
     */
    value?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ValidValueMd.build]] instead.
 */
export declare function createValidValueMd(json: any): ValidValueMd;
/**
 * ValidValueMdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ValidValueMdField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ValidValueMd.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ValidValueMd.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ValidValueMd {
    function build(json: {
        [keys: string]: FieldType;
    }): ValidValueMd;
}
//# sourceMappingURL=ValidValueMd.d.ts.map
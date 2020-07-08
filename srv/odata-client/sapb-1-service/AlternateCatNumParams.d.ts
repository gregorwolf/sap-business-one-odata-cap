import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AlternateCatNumParams
 */
export interface AlternateCatNumParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Substitute.
     * @nullable
     */
    substitute?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AlternateCatNumParams.build]] instead.
 */
export declare function createAlternateCatNumParams(json: any): AlternateCatNumParams;
/**
 * AlternateCatNumParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlternateCatNumParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AlternateCatNumParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AlternateCatNumParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AlternateCatNumParams.substitute]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    substitute: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AlternateCatNumParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AlternateCatNumParams;
}
//# sourceMappingURL=AlternateCatNumParams.d.ts.map
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EnhancedDiscountGroupParams
 */
export interface EnhancedDiscountGroupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Object Code.
     * @nullable
     */
    objectCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EnhancedDiscountGroupParams.build]] instead.
 */
export declare function createEnhancedDiscountGroupParams(json: any): EnhancedDiscountGroupParams;
/**
 * EnhancedDiscountGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EnhancedDiscountGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EnhancedDiscountGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EnhancedDiscountGroupParams.objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EnhancedDiscountGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EnhancedDiscountGroupParams;
}
//# sourceMappingURL=EnhancedDiscountGroupParams.d.ts.map
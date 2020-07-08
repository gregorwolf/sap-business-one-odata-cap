import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LegalDataDetail
 */
export interface LegalDataDetail {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Line Sequence.
     * @nullable
     */
    lineSequence?: number;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Tax Rate.
     * @nullable
     */
    taxRate?: number;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LegalDataDetail.build]] instead.
 */
export declare function createLegalDataDetail(json: any): LegalDataDetail;
/**
 * LegalDataDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LegalDataDetailField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LegalDataDetail.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.lineSequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineSequence: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.taxRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace LegalDataDetail {
    function build(json: {
        [keys: string]: FieldType;
    }): LegalDataDetail;
}
//# sourceMappingURL=LegalDataDetail.d.ts.map
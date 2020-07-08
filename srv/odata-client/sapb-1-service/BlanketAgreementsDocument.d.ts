import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BlanketAgreementsDocument
 */
export interface BlanketAgreementsDocument {
    /**
     * Agreement Row Number.
     * @nullable
     */
    agreementRowNumber?: number;
    /**
     * Document No.
     * @nullable
     */
    documentNo?: number;
    /**
     * Document Row Number.
     * @nullable
     */
    documentRowNumber?: number;
    /**
     * Document Date.
     * @nullable
     */
    documentDate?: Moment;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Unit Price.
     * @nullable
     */
    unitPrice?: number;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Discount.
     * @nullable
     */
    discount?: number;
    /**
     * Uo M.
     * @nullable
     */
    uoM?: string;
    /**
     * Uo M Code.
     * @nullable
     */
    uoMCode?: string;
    /**
     * Units Of Measurement.
     * @nullable
     */
    unitsOfMeasurement?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDocument.build]] instead.
 */
export declare function createBlanketAgreementsDocument(json: any): BlanketAgreementsDocument;
/**
 * BlanketAgreementsDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlanketAgreementsDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BlanketAgreementsDocument.agreementRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.documentNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.documentRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.unitPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.discount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.uoM]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoM: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.unitsOfMeasurement]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitsOfMeasurement: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BlanketAgreementsDocument {
    function build(json: {
        [keys: string]: FieldType;
    }): BlanketAgreementsDocument;
}
//# sourceMappingURL=BlanketAgreementsDocument.d.ts.map
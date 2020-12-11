import { Moment } from 'moment';
import { BlanketAgreementDocTypeEnum } from './BlanketAgreementDocTypeEnum';
import { BoStatus } from './BoStatus';
import { BaDocumentStatus } from './BaDocumentStatus';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Document Type.
     * @nullable
     */
    documentType?: BlanketAgreementDocTypeEnum;
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
     * Row Status.
     * @nullable
     */
    rowStatus?: BoStatus;
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
    /**
     * Doc Status.
     * @nullable
     */
    docStatus?: BaDocumentStatus;
}
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDocument.build]] instead.
 */
export declare function createBlanketAgreementsDocument(json: any): BlanketAgreementsDocument;
/**
 * BlanketAgreementsDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlanketAgreementsDocumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementsDocument> {
    /**
     * Representation of the [[BlanketAgreementsDocument.agreementRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDocument.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[BlanketAgreementsDocument.rowStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowStatus: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Representation of the [[BlanketAgreementsDocument.docStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of BlanketAgreementsDocumentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BlanketAgreementsDocument {
    /**
     * Metadata information on all properties of the `BlanketAgreementsDocument` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BlanketAgreementsDocument>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BlanketAgreementsDocument;
}
//# sourceMappingURL=BlanketAgreementsDocument.d.ts.map
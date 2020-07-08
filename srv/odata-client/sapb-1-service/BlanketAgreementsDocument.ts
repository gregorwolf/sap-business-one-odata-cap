/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createBlanketAgreementsDocument(json: any): BlanketAgreementsDocument {
  return BlanketAgreementsDocument.build(json);
}

/**
 * BlanketAgreementsDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementsDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BlanketAgreementsDocument.agreementRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDocument.documentNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDocument.documentRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDocument.documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocumentDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BlanketAgreementsDocument.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.unitPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitPrice', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDocument.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDocument.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDocument.uoM]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoM: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoM', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.unitsOfMeasurement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurement: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitsOfMeasurement', this, 'Edm.Double');
}

export namespace BlanketAgreementsDocument {
  export function build(json: { [keys: string]: FieldType }): BlanketAgreementsDocument {
    return createComplexType(json, {
      AgreementRowNumber: (agreementRowNumber: number) => ({ agreementRowNumber: edmToTs(agreementRowNumber, 'Edm.Int32') }),
      DocumentNo: (documentNo: number) => ({ documentNo: edmToTs(documentNo, 'Edm.Int32') }),
      DocumentRowNumber: (documentRowNumber: number) => ({ documentRowNumber: edmToTs(documentRowNumber, 'Edm.Int32') }),
      DocumentDate: (documentDate: Moment) => ({ documentDate: edmToTs(documentDate, 'Edm.DateTimeOffset') }),
      ItemNo: (itemNo: string) => ({ itemNo: edmToTs(itemNo, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      UnitPrice: (unitPrice: number) => ({ unitPrice: edmToTs(unitPrice, 'Edm.Double') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      Discount: (discount: number) => ({ discount: edmToTs(discount, 'Edm.Double') }),
      UoM: (uoM: string) => ({ uoM: edmToTs(uoM, 'Edm.String') }),
      UoMCode: (uoMCode: string) => ({ uoMCode: edmToTs(uoMCode, 'Edm.String') }),
      UnitsOfMeasurement: (unitsOfMeasurement: number) => ({ unitsOfMeasurement: edmToTs(unitsOfMeasurement, 'Edm.Double') })
    });
  }
}

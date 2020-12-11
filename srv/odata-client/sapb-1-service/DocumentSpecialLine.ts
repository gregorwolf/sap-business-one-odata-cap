/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDocSpecialLineType } from './BoDocSpecialLineType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentSpecialLine
 */
export interface DocumentSpecialLine {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * After Line Number.
   * @nullable
   */
  afterLineNumber?: number;
  /**
   * Order Number.
   * @nullable
   */
  orderNumber?: number;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: BoDocSpecialLineType;
  /**
   * Subtotal.
   * @nullable
   */
  subtotal?: number;
  /**
   * Line Text.
   * @nullable
   */
  lineText?: string;
  /**
   * Subtotal Fc.
   * @nullable
   */
  subtotalFc?: number;
  /**
   * Subtotal Sc.
   * @nullable
   */
  subtotalSc?: number;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: number;
  /**
   * Tax Amount Fc.
   * @nullable
   */
  taxAmountFc?: number;
  /**
   * Tax Amount Sc.
   * @nullable
   */
  taxAmountSc?: number;
  /**
   * Freight 1.
   * @nullable
   */
  freight1?: number;
  /**
   * Freight 1 Fc.
   * @nullable
   */
  freight1Fc?: number;
  /**
   * Freight 1 Sc.
   * @nullable
   */
  freight1Sc?: number;
  /**
   * Freight 2.
   * @nullable
   */
  freight2?: number;
  /**
   * Freight 2 Fc.
   * @nullable
   */
  freight2Fc?: number;
  /**
   * Freight 2 Sc.
   * @nullable
   */
  freight2Sc?: number;
  /**
   * Freight 3.
   * @nullable
   */
  freight3?: number;
  /**
   * Freight 3 Fc.
   * @nullable
   */
  freight3Fc?: number;
  /**
   * Freight 3 Sc.
   * @nullable
   */
  freight3Sc?: number;
  /**
   * Gross Total.
   * @nullable
   */
  grossTotal?: number;
  /**
   * Gross Total Fc.
   * @nullable
   */
  grossTotalFc?: number;
  /**
   * Gross Total Sc.
   * @nullable
   */
  grossTotalSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentSpecialLine.build]] instead.
 */
export function createDocumentSpecialLine(json: any): DocumentSpecialLine {
  return DocumentSpecialLine.build(json);
}

/**
 * DocumentSpecialLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentSpecialLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentSpecialLine> {
  /**
   * Representation of the [[DocumentSpecialLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSpecialLine.afterLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  afterLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AfterLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSpecialLine.orderNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrderNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSpecialLine.lineType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineType', this);
  /**
   * Representation of the [[DocumentSpecialLine.subtotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Subtotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.lineText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineText', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSpecialLine.subtotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubtotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.subtotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotalSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubtotalSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.taxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.taxAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight1', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight1Fc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1Fc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight1FC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight1Sc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1Sc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight1SC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight2', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight2Fc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2Fc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight2FC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight2Sc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2Sc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight2SC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight3', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight3Fc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3Fc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight3FC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight3Sc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3Sc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight3SC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.grossTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.grossTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.grossTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotalSC', this, 'Edm.Double');

  /**
   * Creates an instance of DocumentSpecialLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentSpecialLine);
  }
}

export namespace DocumentSpecialLine {
  /**
   * Metadata information on all properties of the `DocumentSpecialLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentSpecialLine>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AfterLineNumber',
    name: 'afterLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'OrderNumber',
    name: 'orderNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineType',
    name: 'lineType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Subtotal',
    name: 'subtotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineText',
    name: 'lineText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SubtotalFC',
    name: 'subtotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SubtotalSC',
    name: 'subtotalSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxAmount',
    name: 'taxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxAmountFC',
    name: 'taxAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxAmountSC',
    name: 'taxAmountSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight1',
    name: 'freight1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight1FC',
    name: 'freight1Fc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight1SC',
    name: 'freight1Sc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight2',
    name: 'freight2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight2FC',
    name: 'freight2Fc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight2SC',
    name: 'freight2Sc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight3',
    name: 'freight3',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight3FC',
    name: 'freight3Fc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Freight3SC',
    name: 'freight3Sc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossTotal',
    name: 'grossTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossTotalFC',
    name: 'grossTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossTotalSC',
    name: 'grossTotalSc',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentSpecialLine {
    return deserializeComplexTypeV4(json, DocumentSpecialLine);
  }
}

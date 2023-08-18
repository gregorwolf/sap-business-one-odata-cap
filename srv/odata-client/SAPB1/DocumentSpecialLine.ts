/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDocSpecialLineType } from './BoDocSpecialLineType';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * DocumentSpecialLine
 */
export interface DocumentSpecialLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * After Line Number.
   * @nullable
   */
  afterLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Order Number.
   * @nullable
   */
  orderNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Subtotal.
   * @nullable
   */
  subtotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Text.
   * @nullable
   */
  lineText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Subtotal Fc.
   * @nullable
   */
  subtotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Subtotal Sc.
   * @nullable
   */
  subtotalSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Amount Fc.
   * @nullable
   */
  taxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Amount Sc.
   * @nullable
   */
  taxAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 1.
   * @nullable
   */
  freight1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 1 Fc.
   * @nullable
   */
  freight1Fc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 1 Sc.
   * @nullable
   */
  freight1Sc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 2.
   * @nullable
   */
  freight2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 2 Fc.
   * @nullable
   */
  freight2Fc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 2 Sc.
   * @nullable
   */
  freight2Sc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 3.
   * @nullable
   */
  freight3?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 3 Fc.
   * @nullable
   */
  freight3Fc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Freight 3 Sc.
   * @nullable
   */
  freight3Sc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Total.
   * @nullable
   */
  grossTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Total Fc.
   * @nullable
   */
  grossTotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Total Sc.
   * @nullable
   */
  grossTotalSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * DocumentSpecialLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentSpecialLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentSpecialLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentSpecialLine.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentSpecialLine.afterLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  afterLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AfterLineNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentSpecialLine.orderNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OrderNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentSpecialLine.lineType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: EnumField<
    EntityT,
    DeSerializersT,
    BoDocSpecialLineType,
    true,
    false
  > = this._fieldBuilder.buildEnumField('LineType', BoDocSpecialLineType, true);
  /**
   * Representation of the {@link DocumentSpecialLine.subtotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Subtotal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.lineText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineText', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentSpecialLine.subtotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubtotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.subtotalSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotalSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubtotalSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.taxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.taxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxAmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.taxAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxAmountSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight1', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight1Fc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1Fc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight1FC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight1Sc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1Sc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight1SC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight2', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight2Fc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2Fc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight2FC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight2Sc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2Sc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight2SC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight3', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight3Fc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3Fc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight3FC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.freight3Sc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3Sc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Freight3SC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.grossTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.grossTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossTotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentSpecialLine.grossTotalSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossTotalSC', 'Edm.Double', true);

  /**
   * Creates an instance of DocumentSpecialLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DocumentSpecialLine, fieldOptions);
  }
}

export namespace DocumentSpecialLine {
  /**
   * Metadata information on all properties of the `DocumentSpecialLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentSpecialLine>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AfterLineNumber',
      name: 'afterLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'OrderNumber',
      name: 'orderNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineType',
      name: 'lineType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Subtotal',
      name: 'subtotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineText',
      name: 'lineText',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SubtotalFC',
      name: 'subtotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SubtotalSC',
      name: 'subtotalSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxAmount',
      name: 'taxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxAmountFC',
      name: 'taxAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxAmountSC',
      name: 'taxAmountSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight1',
      name: 'freight1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight1FC',
      name: 'freight1Fc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight1SC',
      name: 'freight1Sc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight2',
      name: 'freight2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight2FC',
      name: 'freight2Fc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight2SC',
      name: 'freight2Sc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight3',
      name: 'freight3',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight3FC',
      name: 'freight3Fc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Freight3SC',
      name: 'freight3Sc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossTotal',
      name: 'grossTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossTotalFC',
      name: 'grossTotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossTotalSC',
      name: 'grossTotalSc',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}

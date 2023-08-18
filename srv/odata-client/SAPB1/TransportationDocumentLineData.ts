/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentObjectTypeEnum } from './DocumentObjectTypeEnum';
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
 * TransportationDocumentLineData
 */
export interface TransportationDocumentLineData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transp Doc Number.
   * @nullable
   */
  transpDocNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Number.
   * @nullable
   */
  docNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Line Number.
   * @nullable
   */
  docLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transported Quantity.
   * @nullable
   */
  transportedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Order Num.
   * @nullable
   */
  docOrderNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * TransportationDocumentLineDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TransportationDocumentLineDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TransportationDocumentLineData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TransportationDocumentLineData.transpDocNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transpDocNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TranspDocNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TransportationDocumentLineData.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineID', 'Edm.Int32', true);
  /**
   * Representation of the {@link TransportationDocumentLineData.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: EnumField<
    EntityT,
    DeSerializersT,
    DocumentObjectTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocType',
    DocumentObjectTypeEnum,
    true
  );
  /**
   * Representation of the {@link TransportationDocumentLineData.docNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link TransportationDocumentLineData.docLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocLineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link TransportationDocumentLineData.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link TransportationDocumentLineData.transportedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transportedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransportedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link TransportationDocumentLineData.docOrderNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docOrderNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocOrderNum', 'Edm.Int32', true);

  /**
   * Creates an instance of TransportationDocumentLineDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      TransportationDocumentLineData,
      fieldOptions
    );
  }
}

export namespace TransportationDocumentLineData {
  /**
   * Metadata information on all properties of the `TransportationDocumentLineData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TransportationDocumentLineData>[] =
    [
      {
        originalName: 'TranspDocNumber',
        name: 'transpDocNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineID',
        name: 'lineId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocType',
        name: 'docType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocNumber',
        name: 'docNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocLineNumber',
        name: 'docLineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ItemCode',
        name: 'itemCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TransportedQuantity',
        name: 'transportedQuantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DocOrderNum',
        name: 'docOrderNum',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}

/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneratedAssetStatusEnum } from './GeneratedAssetStatusEnum';
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
 * GeneratedAsset
 */
export interface GeneratedAsset<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Asset Code.
   * @nullable
   */
  assetCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Serial Number.
   * @nullable
   */
  serialNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Amount.
   * @nullable
   */
  amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount Sc.
   * @nullable
   */
  amountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * GeneratedAssetField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class GeneratedAssetField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  GeneratedAsset,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link GeneratedAsset.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link GeneratedAsset.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link GeneratedAsset.visualOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisualOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link GeneratedAsset.assetCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AssetCode', 'Edm.String', true);
  /**
   * Representation of the {@link GeneratedAsset.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    GeneratedAssetStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Status',
    GeneratedAssetStatusEnum,
    true
  );
  /**
   * Representation of the {@link GeneratedAsset.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link GeneratedAsset.serialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SerialNumber', 'Edm.String', true);
  /**
   * Representation of the {@link GeneratedAsset.amount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('amount', 'Edm.Double', true);
  /**
   * Representation of the {@link GeneratedAsset.amountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('amountSC', 'Edm.Double', true);

  /**
   * Creates an instance of GeneratedAssetField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, GeneratedAsset, fieldOptions);
  }
}

export namespace GeneratedAsset {
  /**
   * Metadata information on all properties of the `GeneratedAsset` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GeneratedAsset>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VisualOrder',
      name: 'visualOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AssetCode',
      name: 'assetCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SerialNumber',
      name: 'serialNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'amount',
      name: 'amount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'amountSC',
      name: 'amountSc',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}

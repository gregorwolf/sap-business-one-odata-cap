/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoBoeStatus } from './BoBoeStatus';
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
 * RetornoCodeParams
 */
export interface RetornoCodeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Occurence Code.
   * @nullable
   */
  occurenceCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Movement Code.
   * @nullable
   */
  movementCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Boe Status.
   * @nullable
   */
  boeStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Color.
   * @nullable
   */
  color?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * File Format.
   * @nullable
   */
  fileFormat?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * RetornoCodeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RetornoCodeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RetornoCodeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RetornoCodeParams.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link RetornoCodeParams.occurenceCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  occurenceCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OccurenceCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link RetornoCodeParams.movementCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  movementCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MovementCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link RetornoCodeParams.boeStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeStatus: EnumField<EntityT, DeSerializersT, BoBoeStatus, true, false> =
    this._fieldBuilder.buildEnumField('BoeStatus', BoBoeStatus, true);
  /**
   * Representation of the {@link RetornoCodeParams.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);
  /**
   * Representation of the {@link RetornoCodeParams.color} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  color: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Color', 'Edm.Int32', true);
  /**
   * Representation of the {@link RetornoCodeParams.fileFormat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileFormat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FileFormat', 'Edm.String', true);
  /**
   * Representation of the {@link RetornoCodeParams.bankCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankCode', 'Edm.String', true);

  /**
   * Creates an instance of RetornoCodeParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, RetornoCodeParams, fieldOptions);
  }
}

export namespace RetornoCodeParams {
  /**
   * Metadata information on all properties of the `RetornoCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RetornoCodeParams>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'OccurenceCode',
      name: 'occurenceCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'MovementCode',
      name: 'movementCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BoeStatus',
      name: 'boeStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Color',
      name: 'color',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FileFormat',
      name: 'fileFormat',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BankCode',
      name: 'bankCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}

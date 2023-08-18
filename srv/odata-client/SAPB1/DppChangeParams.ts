/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * DppChangeParams
 */
export interface DppChangeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * From Date.
   * @nullable
   */
  fromDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * From Time.
   * @nullable
   */
  fromTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Has Changed.
   * @nullable
   */
  hasChanged?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DppChangeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DppChangeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DppChangeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DppChangeParams.fromDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DppChangeParams.fromTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FromTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link DppChangeParams.hasChanged} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hasChanged: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('HasChanged', BoYesNoEnum, true);

  /**
   * Creates an instance of DppChangeParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DppChangeParams, fieldOptions);
  }
}

export namespace DppChangeParams {
  /**
   * Metadata information on all properties of the `DppChangeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DppChangeParams>[] = [
    {
      originalName: 'FromDate',
      name: 'fromDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'FromTime',
      name: 'fromTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'HasChanged',
      name: 'hasChanged',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}

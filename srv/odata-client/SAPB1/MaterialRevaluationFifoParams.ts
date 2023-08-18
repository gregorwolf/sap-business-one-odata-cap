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
 * MaterialRevaluationFifoParams
 */
export interface MaterialRevaluationFifoParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Location Type.
   * @nullable
   */
  locationType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Show Issued Layers.
   * @nullable
   */
  showIssuedLayers?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * MaterialRevaluationFifoParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationFifoParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MaterialRevaluationFifoParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MaterialRevaluationFifoParams.itemCode} property for query construction.
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
   * Representation of the {@link MaterialRevaluationFifoParams.locationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LocationType', 'Edm.String', true);
  /**
   * Representation of the {@link MaterialRevaluationFifoParams.locationCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LocationCode', 'Edm.String', true);
  /**
   * Representation of the {@link MaterialRevaluationFifoParams.showIssuedLayers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  showIssuedLayers: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ShowIssuedLayers', BoYesNoEnum, true);

  /**
   * Creates an instance of MaterialRevaluationFifoParamsField.
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
      MaterialRevaluationFifoParams,
      fieldOptions
    );
  }
}

export namespace MaterialRevaluationFifoParams {
  /**
   * Metadata information on all properties of the `MaterialRevaluationFifoParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationFifoParams>[] =
    [
      {
        originalName: 'ItemCode',
        name: 'itemCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LocationType',
        name: 'locationType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LocationCode',
        name: 'locationCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShowIssuedLayers',
        name: 'showIssuedLayers',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}

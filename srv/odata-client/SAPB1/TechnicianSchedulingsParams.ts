/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * TechnicianSchedulingsParams
 */
export interface TechnicianSchedulingsParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Technician.
   * @nullable
   */
  technician?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * TechnicianSchedulingsParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSchedulingsParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TechnicianSchedulingsParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TechnicianSchedulingsParams.technician} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Technician', 'Edm.Int32', true);
  /**
   * Representation of the {@link TechnicianSchedulingsParams.startDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link TechnicianSchedulingsParams.endDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of TechnicianSchedulingsParamsField.
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
      TechnicianSchedulingsParams,
      fieldOptions
    );
  }
}

export namespace TechnicianSchedulingsParams {
  /**
   * Metadata information on all properties of the `TechnicianSchedulingsParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSchedulingsParams>[] =
    [
      {
        originalName: 'Technician',
        name: 'technician',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'StartDate',
        name: 'startDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'EndDate',
        name: 'endDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      }
    ];
}

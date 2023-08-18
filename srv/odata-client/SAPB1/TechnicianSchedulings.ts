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
 * TechnicianSchedulings
 */
export interface TechnicianSchedulings<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Service Call Id.
   * @nullable
   */
  serviceCallId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Scheduling Line Num.
   * @nullable
   */
  schedulingLineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
  /**
   * Is Closed.
   * @nullable
   */
  isClosed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * TechnicianSchedulingsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSchedulingsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TechnicianSchedulings,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TechnicianSchedulings.serviceCallId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCallId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ServiceCallID', 'Edm.Int32', true);
  /**
   * Representation of the {@link TechnicianSchedulings.schedulingLineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  schedulingLineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SchedulingLineNum',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TechnicianSchedulings.startDate} property for query construction.
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
   * Representation of the {@link TechnicianSchedulings.endDate} property for query construction.
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
   * Representation of the {@link TechnicianSchedulings.isClosed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isClosed: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsClosed', BoYesNoEnum, true);

  /**
   * Creates an instance of TechnicianSchedulingsField.
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
      TechnicianSchedulings,
      fieldOptions
    );
  }
}

export namespace TechnicianSchedulings {
  /**
   * Metadata information on all properties of the `TechnicianSchedulings` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSchedulings>[] = [
    {
      originalName: 'ServiceCallID',
      name: 'serviceCallId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SchedulingLineNum',
      name: 'schedulingLineNum',
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
    },
    {
      originalName: 'IsClosed',
      name: 'isClosed',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}

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
 * PmcActivityData
 */
export interface PmcActivityData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Activity Id.
   * @nullable
   */
  activityId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Labor Item.
   * @nullable
   */
  laborItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Is Chargeable.
   * @nullable
   */
  isChargeable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Absence.
   * @nullable
   */
  isAbsence?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * PmcActivityDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcActivityDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmcActivityData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmcActivityData.activityId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActivityID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmcActivityData.activityType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActivityType', 'Edm.String', true);
  /**
   * Representation of the {@link PmcActivityData.laborItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  laborItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LaborItem', 'Edm.String', true);
  /**
   * Representation of the {@link PmcActivityData.isChargeable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isChargeable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsChargeable', BoYesNoEnum, true);
  /**
   * Representation of the {@link PmcActivityData.isAbsence} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isAbsence: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsAbsence', BoYesNoEnum, true);

  /**
   * Creates an instance of PmcActivityDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmcActivityData, fieldOptions);
  }
}

export namespace PmcActivityData {
  /**
   * Metadata information on all properties of the `PmcActivityData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcActivityData>[] = [
    {
      originalName: 'ActivityID',
      name: 'activityId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ActivityType',
      name: 'activityType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LaborItem',
      name: 'laborItem',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IsChargeable',
      name: 'isChargeable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IsAbsence',
      name: 'isAbsence',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}

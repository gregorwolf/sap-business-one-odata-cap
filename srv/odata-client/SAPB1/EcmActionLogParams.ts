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
 * EcmActionLogParams
 */
export interface EcmActionLogParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Action Id.
   * @nullable
   */
  actionId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Log Id.
   * @nullable
   */
  logId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * EcmActionLogParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionLogParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EcmActionLogParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EcmActionLogParams.actionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActionID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmActionLogParams.logId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogID', 'Edm.Int32', true);

  /**
   * Creates an instance of EcmActionLogParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EcmActionLogParams, fieldOptions);
  }
}

export namespace EcmActionLogParams {
  /**
   * Metadata information on all properties of the `EcmActionLogParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionLogParams>[] = [
    {
      originalName: 'ActionID',
      name: 'actionId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LogID',
      name: 'logId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}

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
 * TeamParams
 */
export interface TeamParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Team Id.
   * @nullable
   */
  teamId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * TeamParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TeamParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TeamParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TeamParams.teamId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  teamId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TeamID', 'Edm.Int32', true);

  /**
   * Creates an instance of TeamParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TeamParams, fieldOptions);
  }
}

export namespace TeamParams {
  /**
   * Metadata information on all properties of the `TeamParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TeamParams>[] = [
    {
      originalName: 'TeamID',
      name: 'teamId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}

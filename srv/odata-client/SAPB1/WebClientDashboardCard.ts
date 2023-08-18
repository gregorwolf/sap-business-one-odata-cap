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
 * WebClientDashboardCard
 */
export interface WebClientDashboardCard<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Content.
   * @nullable
   */
  content?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sys.
   * @nullable
   */
  sys?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Version.
   * @nullable
   */
  version?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WebClientDashboardCardField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientDashboardCardField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientDashboardCard,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientDashboardCard.guid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  guid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Guid', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientDashboardCard.userId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserId', 'Edm.Int32', true);
  /**
   * Representation of the {@link WebClientDashboardCard.content} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  content: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Content', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientDashboardCard.sys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sys: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Sys', BoYesNoEnum, true);
  /**
   * Representation of the {@link WebClientDashboardCard.version} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  version: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true);

  /**
   * Creates an instance of WebClientDashboardCardField.
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
      WebClientDashboardCard,
      fieldOptions
    );
  }
}

export namespace WebClientDashboardCard {
  /**
   * Metadata information on all properties of the `WebClientDashboardCard` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientDashboardCard>[] = [
    {
      originalName: 'Guid',
      name: 'guid',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UserId',
      name: 'userId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Content',
      name: 'content',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Sys',
      name: 'sys',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Version',
      name: 'version',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}

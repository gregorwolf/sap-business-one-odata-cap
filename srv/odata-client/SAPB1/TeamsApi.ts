/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Teams } from './Teams';
import { TeamsRequestBuilder } from './TeamsRequestBuilder';
import { TeamMember } from './TeamMember';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class TeamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Teams<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): TeamsApi<DeSerializersT> {
    return new TeamsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Teams;

  requestBuilder(): TeamsRequestBuilder<DeSerializersT> {
    return new TeamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Teams<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Teams<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Teams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Teams, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Teams, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEAM_ID: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TEAM_NAME: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEAM_MEMBERS: CollectionField<
      Teams<DeSerializers>,
      DeSerializersT,
      TeamMember,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Teams<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link teamId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_ID: fieldBuilder.buildEdmTypeField('TeamID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link teamName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_NAME: fieldBuilder.buildEdmTypeField(
          'TeamName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link teamMembers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_MEMBERS: fieldBuilder.buildCollectionField(
          'TeamMembers',
          TeamMember,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Teams)
      };
    }

    return this._schema;
  }
}

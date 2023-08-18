/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityStatuses } from './ActivityStatuses';
import { ActivityStatusesRequestBuilder } from './ActivityStatusesRequestBuilder';
import { ContactsApi } from './ContactsApi';
import { ActivitiesApi } from './ActivitiesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ActivityStatusesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ActivityStatuses<DeSerializersT>, DeSerializersT>
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
  ): ActivityStatusesApi<DeSerializersT> {
    return new ActivityStatusesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      ActivityStatuses<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      ActivityStatuses<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ContactsApi<DeSerializersT>, ActivitiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CONTACTS: new OneToManyLink('Contacts', this, linkedApis[0]),
      ACTIVITIES: new OneToManyLink('Activities', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ActivityStatuses;

  requestBuilder(): ActivityStatusesRequestBuilder<DeSerializersT> {
    return new ActivityStatusesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ActivityStatuses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ActivityStatuses<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ActivityStatuses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ActivityStatuses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ActivityStatuses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATUS_DESCRIPTION: OrderableEdmTypeField<
      ActivityStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS_ID: OrderableEdmTypeField<
      ActivityStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS_NAME: OrderableEdmTypeField<
      ActivityStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OI_STATUS: OrderableEdmTypeField<
      ActivityStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      ActivityStatuses<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      ActivityStatuses<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ActivityStatuses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link statusDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StatusDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_ID: fieldBuilder.buildEdmTypeField(
          'StatusId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link statusName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_NAME: fieldBuilder.buildEdmTypeField(
          'StatusName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOiStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OI_STATUS: fieldBuilder.buildEdmTypeField(
          'U_OIStatus',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ActivityStatuses)
      };
    }

    return this._schema;
  }
}

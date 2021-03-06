/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecipientTypeEnum } from './RecipientTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ActivityRecipient
 */
export interface ActivityRecipient {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Recipient Type.
   * @nullable
   */
  recipientType?: RecipientTypeEnum;
  /**
   * Recipient Code.
   * @nullable
   */
  recipientCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipient.build]] instead.
 */
export function createActivityRecipient(json: any): ActivityRecipient {
  return ActivityRecipient.build(json);
}

/**
 * ActivityRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityRecipientField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityRecipient> {
  /**
   * Representation of the [[ActivityRecipient.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ActivityRecipient.recipientType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recipientType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('RecipientType', this);
  /**
   * Representation of the [[ActivityRecipient.recipientCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recipientCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RecipientCode', this, 'Edm.String');

  /**
   * Creates an instance of ActivityRecipientField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ActivityRecipient);
  }
}

export namespace ActivityRecipient {
  /**
   * Metadata information on all properties of the `ActivityRecipient` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityRecipient>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RecipientType',
    name: 'recipientType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'RecipientCode',
    name: 'recipientCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ActivityRecipient {
    return deserializeComplexTypeV4(json, ActivityRecipient);
  }
}

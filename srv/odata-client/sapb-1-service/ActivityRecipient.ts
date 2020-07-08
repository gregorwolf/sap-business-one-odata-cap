/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ActivityRecipientField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ActivityRecipient.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ActivityRecipient.recipientCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recipientCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RecipientCode', this, 'Edm.String');
}

export namespace ActivityRecipient {
  export function build(json: { [keys: string]: FieldType }): ActivityRecipient {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      RecipientCode: (recipientCode: string) => ({ recipientCode: edmToTs(recipientCode, 'Edm.String') })
    });
  }
}
